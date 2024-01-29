import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { HadithItemsService } from '../../Services/hadith-items.service';
import { ListHadithTypeComponent } from '../../../hadith-type/Components/list-hadith-type/list-hadith-type.component';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';



@Component({
  selector: 'app-edit-hadith',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, ListHadithTypeComponent],
  templateUrl: './edit-hadith.component.html',
  styleUrl: './edit-hadith.component.css'
})
export class EditHadithComponent {
  @Output() videoUploaded = new EventEmitter<String>();
ID:any
  id = this.actRoute.snapshot.params['id'];
  massege: boolean = false
editH:any=[]
  resultForm :any ={};
  private routeSub: Subscription;
updateHadithForm: FormGroup=<FormGroup>{};
  constructor(
    private matDialog: MatDialog,
    public fb: FormBuilder,
    public hadithItemsService: HadithItemsService,
    public router: Router,
    public actRoute: ActivatedRoute,
    private location: Location,
  ) {
    this.routeSub = Subscription.EMPTY;
  }
  ngOnInit(): void {
    
    
    this.actRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      // console.log(this.id)
    })
    this.getHadithById(this.id)
    this.initFrom();
  }
  getBack()
  {
    this.location.back()
  }

  initFrom(){
    this.updateHadithForm = this.fb.group({
      name: ['',[Validators.required]],
      nameArabic: ['',[Validators.required]],
      description: ['',[Validators.required]],
 
    });
  }
  onSubmit() {
  
      this.hadithItemsService.updateHadith(this.id, this.updateHadithForm.value).subscribe(response => {

        Swal.fire({
          title: "تم تعديل الفيدــيو بـــــنجــأح !",
          text: "Done",
          icon: "success",
        });
        this.goBack()
         //this.videoUploaded.emit(this.id);
        

  

      }, error =>{ 
        Swal.fire({  icon: "error",title: "خطـــاء", text: "خطــاء في تعديل الفيديو"})
    
               this.videoUploaded.emit(this.ID);


      }
      

      )}
    

  getHadithById(id: any) {
    this.hadithItemsService.getvideobyTypeId(id).subscribe((data) => {
    // console.log(data);
    this.editH=data;
    // console.log(data)
    
      this.updateHadithForm.patchValue({
        name:data.data['name'],
        nameArabic:data.data['nameArabic'],
        description:data.data['description'],
            
      }); 
    });
  }


  closeModal() {
    this.matDialog.closeAll()
  }
  goBack() {
    this.location.back();
  }

}
