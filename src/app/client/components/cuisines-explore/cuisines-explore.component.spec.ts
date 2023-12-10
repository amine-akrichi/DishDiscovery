import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisinesExploreComponent } from './cuisines-explore.component';

describe('CuisinesExploreComponent', () => {
  let component: CuisinesExploreComponent;
  let fixture: ComponentFixture<CuisinesExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuisinesExploreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuisinesExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
