import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCuisinesComponent } from './home-cuisines.component';

describe('HomeCuisinesComponent', () => {
  let component: HomeCuisinesComponent;
  let fixture: ComponentFixture<HomeCuisinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCuisinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCuisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
