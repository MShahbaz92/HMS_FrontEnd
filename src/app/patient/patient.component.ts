import { Component } from '@angular/core';
import { IPatient, SeedsServiceService } from '../services/seeds-service.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent {
  Dummy(alertMessage: string) {
    alert(alertMessage); // Show the alert with the provided message
    
    
  }
  
patients: IPatient[] = [];


constructor(private seedsService : SeedsServiceService) {
  
  
}
ngOnInit(){
this.patients = this.seedsService.GetPatient();
}
}