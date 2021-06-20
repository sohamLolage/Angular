import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCrudComponent } from './register-crud.component';

describe('RegisterCrudComponent', () => {
  let component: RegisterCrudComponent;
  let fixture: ComponentFixture<RegisterCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
