import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { FormsModule } from '@angular/forms';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicineListComponent,
    AddMedicineComponent,
    UpdateMedicineComponent,
    MedicineDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
