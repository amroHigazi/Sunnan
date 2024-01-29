import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HadithService } from '../../../hadith-type/Services/hadith.service';
import { HadithItemsService } from '../../Services/hadith-items.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterOutlet } from '@angular/router';
import { ListHadithTypeComponent } from '../../../hadith-type/Components/list-hadith-type/list-hadith-type.component';
import { DataService } from '../../../Services/data.service';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from 'src/app/loader.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-hadith',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, ListHadithTypeComponent],
  templateUrl: './create-hadith.component.html',
  styleUrl: './create-hadith.component.css'
})
export class CreateHadithComponent implements OnInit {
  @Output() videoUploaded = new EventEmitter<String>();
  hadith2: any = []
  hadith: any = [];
  AllFiles: any
  id: any;
  fileName: any;
  fileNameAr: any
  CreateIncidentTypesForm: FormGroup;
  constructor(private matDialog: MatDialog,
    public fb: FormBuilder,
    public hadithItemsService: HadithItemsService, public loadingService: LoaderService,
    public router: Router, public actRoute: ActivatedRoute, hadithService: HadithService, public data: DataService, public http: HttpClient
  ) {
    this.CreateIncidentTypesForm = this.fb.group({
      SectionId: [''],
      Name: [''],
      ArabicName: [''],
      Description: [''],
      FileEn: [''],
      FileAr: [''],

    });
  }
  get SectionId() {
    return this.CreateIncidentTypesForm.controls['SectionId'].patchValue(this.id);
  }
  get Name() {
    return this.CreateIncidentTypesForm.get(['Name']);
  }
  get ArabicName() {
    return this.CreateIncidentTypesForm.get(['ArabicName']);
  }

  get Description() {
    return this.CreateIncidentTypesForm.get(['Description']);
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name
      }
      this.CreateIncidentTypesForm.get('FileEn')?.setValue(file);
    }
  }
  onFileSelectAr(event: any) {
    if (event.target.files.length > 0) {
      const filear = event.target.files[0];
      if (filear) {
        this.fileNameAr = filear.name
      }
      this.CreateIncidentTypesForm.get('FileAr')?.setValue(filear);
    }
  }
  closeModal() {
    this.matDialog.closeAll()
  }
  gethadithbyTypeId(departmentyId: string) {
    this.hadithItemsService.gethadithbyTypeId(departmentyId).subscribe((res) => {
      this.hadith = res;
      // console.log("this item",this.hadith.data
      this.hadith2 = this.hadith.data

    });
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('SectionId', this.CreateIncidentTypesForm.get('SectionId')?.value);
    formData.append('Name', this.CreateIncidentTypesForm.get('Name')?.value);
    formData.append('ArabicName', this.CreateIncidentTypesForm.get('ArabicName')?.value);
    formData.append('Description', this.CreateIncidentTypesForm.get('Description')?.value);
    formData.append('FileEn', this.CreateIncidentTypesForm.get('FileEn')?.value);
    formData.append('FileAr', this.CreateIncidentTypesForm.get('FileAr')?.value);

    this.http.post('http://sunnan-001-site2.atempurl.com/videos/upload', formData)
      .subscribe((res) => {
        Swal.fire({
          title: "تم رفع الفيدــيو بـــــنجــأح !",
          text: "Done",
          icon: "success",
        });
        this.closeModal();
        //   this.gethadithbyTypeId(this.id)
        //  this.router.navigate([`/hadith/list-hadith/${this.id}`])
        this.videoUploaded.emit(this.id);

      }, error => {
        Swal.fire({ icon: "error", title: "خطـــاء", text: "خطــاء في رفع الفيديو", footer: `<a routerLink="/hadith/list-hadith/${this.id}">Why do I have this issue?</a>` })
        this.closeModal();
        this.gethadithbyTypeId(this.id)
      }
      )
  }
  ngOnInit() {
    this.data.currentId.subscribe(id => this.id = id);
    // console.log("id", this.id)
  }

}
