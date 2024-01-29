import { Component, Input, OnInit , Renderer2, ElementRef, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

import { HadithService } from '../../Services/hadith.service';
import { DataService } from '../../../Services/data.service';


@Component({
  selector: 'app-list-hadith-type',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './list-hadith-type.component.html',
  styleUrl: './list-hadith-type.component.css'
})
export class ListHadithTypeComponent {
  hadithType: any = [];
  hadithType2 :any =[]
  id = this.actRoute.snapshot.params['id'];
name:any
  private routeSub: Subscription;
  constructor(public hadithService: HadithService, public router: Router,
    public actRoute: ActivatedRoute,public data :DataService,  private renderer: Renderer2, private el: ElementRef) {
    this.routeSub = Subscription.EMPTY;
}
  ngOnInit(): void {
    this.renderer.setStyle(document.body, 'background','#F9FDF7'); // Set background

    this.actRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      // console.log(this.id)

    });
this.gethadithTypecategoryId(this.id)
   
if(this.id =="2902b665-1190-4c70-9915-b9c2d7680450"){
  this.name ="عن النبي"

}
if(this.id =="43ed59c2-4f50-4744-a7ff-b1e4940d1496"){
  this.name ="سنن واذكار "

}

if(this.id =="d28888e9-2ba9-473a-a40f-e38cb54f9b35"){
  this.name =" قصص ومغازي"
}
  }

  gethadithTypecategoryId(categoryId: string) {
    this.hadithService.gethadithTypecategoryId(categoryId).subscribe((res) => {
      this.hadithType=res;
      this.hadithType2 =this.hadithType.data
      // console.log(this.hadithType2)
      
      
    });

  }
  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background'); // Reset background
  }

}
