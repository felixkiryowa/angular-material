import { Customer } from './../customer';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-dialog-holder',
  templateUrl: './edit-dialog-holder.component.html',
  styleUrls: ['./edit-dialog-holder.component.scss']
})
export class EditDialogHolderComponent implements OnInit {
  cutomer_data:any;
  registerForm: FormGroup;
  submitted = false;
  customer = new Customer();
  constructor(
    private formBuilder: FormBuilder,
    public thisDialogRef: MatDialogRef<EditDialogHolderComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
      this.customer_data = this.data.content;
      console.log(this.customer_data);
     }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstname: [this.customer_data.firstname ? this.customer_data.firstname : ''],
        lastname: [this.customer_data.lastname ? this.customer_data.lastname : ''],
        age: [this.customer_data.age ? this.customer_data.age : ''],
        // email: ['', [Validators.required, Validators.email]],
        // password: ['', [Validators.required, Validators.minLength(6)]]
    });
}



onSubmit() {
    this.submitted = true;
    
     const data = {
       firstname:this.registerForm.value.firstname,
       lastname:this.registerForm.value.lastname,
       age:this.registerForm.value.age

     }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return ;
    }else {
      console.log(data);
      alert('SUCCESS!! :-)');
    }
}

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }


}
