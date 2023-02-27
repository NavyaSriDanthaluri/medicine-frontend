import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent implements OnInit {

  medicine: Medicine = new Medicine();
  constructor(private medineService: MedicineService,
    private router: Router) { }
  ngOnInit(): void{

  }

  saveMedicine(){
    this.medineService.addMedicine(this.medicine).subscribe( data=>{
      console.log(data);
      this.goToMedicineList();
    },
    error => console.log(error));
  }

  goToMedicineList(){
    this.router.navigate(['/medicines']);
  }

  onSubmit(){
    console.log(this.medicine);
    this.saveMedicine();
  }

}
