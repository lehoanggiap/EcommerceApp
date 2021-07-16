import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductScreenComponent } from './add-new-product-screen.component';

describe('AddNewProductScreenComponent', () => {
  let component: AddNewProductScreenComponent;
  let fixture: ComponentFixture<AddNewProductScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewProductScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProductScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
