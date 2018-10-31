import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogHolderComponent } from './edit-dialog-holder.component';

describe('EditDialogHolderComponent', () => {
  let component: EditDialogHolderComponent;
  let fixture: ComponentFixture<EditDialogHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDialogHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
