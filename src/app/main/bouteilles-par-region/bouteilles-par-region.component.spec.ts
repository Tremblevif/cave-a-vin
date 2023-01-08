import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouteillesParRegionComponent } from './bouteilles-par-region.component';

describe('BouteillesParRegionComponent', () => {
  let component: BouteillesParRegionComponent;
  let fixture: ComponentFixture<BouteillesParRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouteillesParRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouteillesParRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
