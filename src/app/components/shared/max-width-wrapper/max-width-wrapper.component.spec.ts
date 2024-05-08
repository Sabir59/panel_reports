import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxWidthWrapperComponent } from './max-width-wrapper.component';

describe('MaxWidthWrapperComponent', () => {
  let component: MaxWidthWrapperComponent;
  let fixture: ComponentFixture<MaxWidthWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxWidthWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaxWidthWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
