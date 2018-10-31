import { EditDialogHolderComponent } from './../edit-dialog-holder/edit-dialog-holder.component';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../services/customer.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private chRef: ChangeDetectorRef,
    public dialog: MatDialog
    ) {}

  customers: Customer[];
  customer = new Customer();
  // Our future instance of DataTable
  dataTable: any;
  dialogResult: any;
  ngOnInit(): void {
     this.getCustomers();
  }
  getCustomers() {
    return this.customerService.getCustomers()
      .subscribe(
        customers => {
        console.log(customers);
        this.customers = customers;
          // You'll have to wait that changeDetection occurs and projects data into
          // the HTML template, you can ask Angular to that for you ;-)
          this.chRef.detectChanges();
        // Now you can use jQuery DataTables :
        const table: any = $('table');
        this.dataTable = table.DataTable();
        }
      );
  }

    EditCustomer(customer) {
      console.log(customer);
      const dialogRef = this.dialog.open(EditDialogHolderComponent, {
        width: '600px',
        height: '600px',
        data: {content: customer}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
      });
      // alert(this.customer);
    }

    DeleteCustomer(customer) {
      alert(customer);
    }

}
