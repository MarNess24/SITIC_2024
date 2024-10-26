import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmaceuticalsComponent } from './add-pharmaceuticals.component';

describe('AddPharmaceuticalsComponent', () => {
  let component: AddPharmaceuticalsComponent;
  let fixture: ComponentFixture<AddPharmaceuticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPharmaceuticalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPharmaceuticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
