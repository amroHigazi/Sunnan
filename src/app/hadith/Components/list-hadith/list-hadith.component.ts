import { Component, Input, OnInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Router } from 'express';
import { ActivatedRoute, Params, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HadithItemsService } from '../../Services/hadith-items.service';
import { CreateHadithComponent } from '../create-hadith/create-hadith.component';
import { DataService } from '../../../Services/data.service';
import { EditHadithComponent } from '../edit-hadith/edit-hadith.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-hadith',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, CreateHadithComponent, EditHadithComponent],
  templateUrl: './list-hadith.component.html',
  styleUrl: './list-hadith.component.css'
})
export class ListHadithComponent {
  hadith: any = [];
  hadith2: any = []
  videoUrl: any
  safeVideoUrl: SafeResourceUrl;
  sectionId: any
  public showMe = false;
  id = this.actRoute.snapshot.params['id'];
  name: any
  private routeSub: Subscription;
  constructor(public hadithItemsService: HadithItemsService, private sanitizer: DomSanitizer,
    public actRoute: ActivatedRoute, private matDialog: MatDialog,
    public data: DataService, private location: Location, private renderer: Renderer2,
    private el: ElementRef) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
    this.routeSub = Subscription.EMPTY;
  }
  goBack() {
    this.location.back();
    this.gethadithbyTypeId(this.id)
  }
  openVideo(videoUrl: string) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
  closeVideo() {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background', '#F9FDF7'); // Set background

    this.actRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
    })


    this.gethadithbyTypeId(this.id)
  }
  gethadithbyTypeId(departmentyId: string) {
    this.hadithItemsService.gethadithbyTypeId(departmentyId).subscribe((res) => {
      this.hadith = res;
      this.hadith2 = this.hadith.data
      this.name = this.hadith2[0].sectionName;
      this.sectionId = this.hadith2[0].sectionId;
      // console.log(this.name);
      // console.log(this.hadith2)

    });
  }
  openModal() {
    const dialogSubmitSubscription = this.matDialog.open(CreateHadithComponent, {
      "maxHeight": '100vh',
      "maxWidth": '200vh',
      "data": "John",
      "autoFocus": false
    });
    dialogSubmitSubscription.componentInstance.videoUploaded.subscribe((res: string) => {
      this.gethadithbyTypeId(res);
    })
    this.data.changeId(this.id);
    // console.log(this.id, "id")
  }
  openEditModal() {
    this.matDialog.open(EditHadithComponent, {
      "maxHeight": '90vh',
      "data": "John",
      "autoFocus": false
    });
  }
  closeModal() {
    this.matDialog.closeAll()
  }
  deleteHadith(id: any) {

    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "لن تتمكن من التراجع عن هذا",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgba(53, 178, 53, 0.708)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'نعم قم بحذفه',
      cancelButtonText: ' الغاء'
    }).then((result) => {
      if (result.isConfirmed) {
        this.hadithItemsService.deleteHadith(id).subscribe((data) => {
          Swal.fire(
            'حذف!',
            'تم حذف الفيديو بنــجاح',
            'success')
          this.gethadithbyTypeId(this.id)


        }
        )


      }

      else {
        Swal.fire({ icon: "error", title: "خطـــاء", text: "  لم يتم حذف الفيديو  " })
      }
    });
  }
  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background'); // Reset background
  }
}

