import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditDialogHolderComponent } from './edit-dialog-holder/edit-dialog-holder.component';


const appRoutes: Routes = [
  {
    path: 'dialog',
    component: DialogComponent
   },

  {
    path: 'myform',
    component: MyFormComponent
  },
  {
    path: 'customers',
    component: CustomerComponent
  },
  {
    path: 'customer/add',
    component: AddCustomerComponent
  },
  {
    path: 'customers/:id',
    component: CustomerDetailsComponent
  },
  {
    path: '',
     redirectTo: 'customers',
      pathMatch: 'full'
   },
];
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogComponent,
    MyDialogComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    EditDialogHolderComponent
  ],
  entryComponents: [
    MyDialogComponent,
    EditDialogHolderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
