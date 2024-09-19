import { Component } from '@angular/core';
import { IDoctor, SeedsServiceService } from '../services/seeds-service.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {
doctors: IDoctor[] = [];

name: string ='Shahbaz';
  constructor(private seedsService : SeedsServiceService) {
  
    
  }
  ngOnInit(){
    this.doctors = this.seedsService.GetDoctor();
    this.name = 'Moeen';
  }
  
}
