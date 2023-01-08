import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegionsComponent } from './menu-regions.component';

describe('MenuRegionsComponent', () => {
  let component: MenuRegionsComponent;
  let fixture: ComponentFixture<MenuRegionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRegionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
