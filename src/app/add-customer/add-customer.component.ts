import { CustomerService } from './../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Customer } from '../customer';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customer = new Customer();
  submitted = false;
  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }
  ngOnInit() {}
  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

 addCustomer() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.customerService.addCustomer(this.customer)
        .subscribe();
  }

}
