import { Component } from '@angular/core';
import { SeedsServiceService } from '../services/seeds-service.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
patients: any;


constructor(private seedsService : SeedsServiceService) {
  
  
}
ngOnInit(){
this.patients = this.seedsService.GetPatient();
}
}