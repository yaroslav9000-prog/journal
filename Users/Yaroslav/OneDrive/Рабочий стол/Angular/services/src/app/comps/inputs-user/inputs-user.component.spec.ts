import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsUserComponent } from './inputs-user.component';

describe('InputsUserComponent', () => {
  let component: InputsUserComponent;
  let fixture: ComponentFixture<InputsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputsUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
