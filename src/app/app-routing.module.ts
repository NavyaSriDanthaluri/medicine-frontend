import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const routes: Routes = [
  {path: 'medicines', component: MedicineListComponent},
  {path: 'add-medicine', component: AddMedicineComponent},
  {path: '', redirectTo: 'medicines', pathMatch: "full"},
  {path: 'update-medicine/:id', component: UpdateMedicineComponent},
  {path: 'medicine-details/:id', component: MedicineDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
