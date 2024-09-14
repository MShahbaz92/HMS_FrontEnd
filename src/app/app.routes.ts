import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';  
import { PatientComponent } from './patient/patient.component';  
import { AppointmentComponent } from './appointment/appointment.component'; 
import { AppComponent } from './app.component';


export const routes: Routes = [
    {path: 'doctor', component: DoctorComponent},
    {path: 'patient', component:PatientComponent},
    {path: 'appointment', component:AppointmentComponent}
    
    // { path: '**', component: NotFoundComponent },  
];