import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadithTypeComponent } from './hadith-type.component';

describe('HadithTypeComponent', () => {
  let component: HadithTypeComponent;
  let fixture: ComponentFixture<HadithTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HadithTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HadithTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
