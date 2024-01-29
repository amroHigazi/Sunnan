import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHadithTypeComponent } from './edit-hadith-type.component';

describe('EditHadithTypeComponent', () => {
  let component: EditHadithTypeComponent;
  let fixture: ComponentFixture<EditHadithTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHadithTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHadithTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
