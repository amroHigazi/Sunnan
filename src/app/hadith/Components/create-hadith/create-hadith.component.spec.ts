import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHadithComponent } from './create-hadith.component';

describe('CreateHadithComponent', () => {
  let component: CreateHadithComponent;
  let fixture: ComponentFixture<CreateHadithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHadithComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
