import { Component } from '@angular/core';
import { SeedsServiceService } from '../services/seeds-service.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
doctors: any;

name: string ='Shahbaz';
  constructor(private seedsService : SeedsServiceService) {
  
    
  }
  ngOnInit(){
    this.doctors = this.seedsService.GetDoctor();
    this.name = 'Moeen';
  }
  
}
