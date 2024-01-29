import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHadithTypeComponent } from './list-hadith-type.component';

describe('ListHadithTypeComponent', () => {
  let component: ListHadithTypeComponent;
  let fixture: ComponentFixture<ListHadithTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHadithTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListHadithTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
