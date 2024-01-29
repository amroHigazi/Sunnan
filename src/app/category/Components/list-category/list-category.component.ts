import { CommonModule } from '@angular/common';
import { Component, Input, OnInit , Renderer2, ElementRef, OnDestroy} from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../../Services/category.service';


@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent implements OnInit {
  Sectionid:any

  id :any
  catId:any
  Categories: any = [];


  private routeSub: Subscription;
  constructor(public categoryService: CategoryService, public router: Router,
    public actRoute: ActivatedRoute,  private renderer: Renderer2, private el: ElementRef) {
    this.routeSub = Subscription.EMPTY;
}

  GetCategories() {
    return this.categoryService.getCategories().subscribe((res) => {
      this.Categories =res.data ;
      this.catId =this.Categories.id
      // console.log(this.catId)

    // console.log(this.Categories)
    },
  
    );
  }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background','#F9FDF7'); // Set background

    this.actRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      // Now you can use this.id in your component
    });
    this.GetCategories();
  }

  ngOnDestroy() {
    this.renderer.removeStyle(document.body, 'background'); // Reset background
  }

}
