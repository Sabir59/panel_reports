import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmpAcademyComponent } from './hmp-academy.component';

describe('HmpAcademyComponent', () => {
  let component: HmpAcademyComponent;
  let fixture: ComponentFixture<HmpAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmpAcademyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HmpAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
