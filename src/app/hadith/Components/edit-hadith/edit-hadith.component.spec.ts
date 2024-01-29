import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHadithComponent } from './edit-hadith.component';

describe('EditHadithComponent', () => {
  let component: EditHadithComponent;
  let fixture: ComponentFixture<EditHadithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHadithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
