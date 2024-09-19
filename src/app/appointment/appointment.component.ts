import { Component } from '@angular/core';
import { IAppointment, SeedsServiceService } from '../services/seeds-service.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
appointment :  IAppointment[]=[];

/**
 *
 */
constructor(private seedsService : SeedsServiceService) {
  
  
}

ngOnInit(){
this.appointment = this.seedsService.GetAppointment();
}
}

