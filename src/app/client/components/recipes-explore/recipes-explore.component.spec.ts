import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesExploreComponent } from './recipes-explore.component';

describe('RecipesExploreComponent', () => {
  let component: RecipesExploreComponent;
  let fixture: ComponentFixture<RecipesExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesExploreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipesExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
