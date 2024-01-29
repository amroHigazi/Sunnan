import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHadithTypeComponent } from './create-hadith-type.component';

describe('CreateHadithTypeComponent', () => {
  let component: CreateHadithTypeComponent;
  let fixture: ComponentFixture<CreateHadithTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHadithTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHadithTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
