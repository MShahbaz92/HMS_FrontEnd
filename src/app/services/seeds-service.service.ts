 import { Injectable } from '@angular/core';
import { Address } from 'node:cluster';

@Injectable({
  providedIn: 'root'
})
export class SeedsServiceService {

  public GetDoctor(): IDoctor[] {
    const doctors = [{
     "DoctorId": "1",
     "DoctorName": "Dr Amjad",
     "DoctorSpecialization": 2, // Assuming 2 corresponds to a specialization enum value
     "DoctorExperience": 10,
     "DoctorContactNumber": "+923001234567",
     "DoctorEmail": "dr.amjad@example.com",
     "DepartmentId": "12345678-1234-1234-1234-123456789012",
     "IsActive": true
    }
     
    ];
    return doctors;
  }
  public GetPatient(): IPatient[] {
    const patients = [
      {
        "PatientId": "123e4567-e89b-12d3-a456-426614174001",
        "PatientName": "John Doe",
        "PatientAge": 30,
        "PatientGender": "Male",
        "PatientContactNumber": "+1-202-555-0143",
        "PatientEmail": "johndoe@example.com",
        "PatientAddress": "123 Main Street, New York, NY",
        "DoctorId": "321e4567-e89b-12d3-a456-426614174999",
        "AdmissionDate": "2024-09-10",
        "DischargeDate": "2024-09-14",
        "IsActive": true,
        "ProfilePictureId": "johndoe.png"
      },
      {
        "PatientId": "123e4567-e89b-12d3-a456-426614174002",
        "PatientName": "Jane Smith",
        "PatientAge": 25,
        "PatientGender": "Female",
        "PatientContactNumber": "+1-202-555-0198",
        "PatientEmail": "janesmith@example.com",
        "PatientAddress": "456 Elm Street, Los Angeles, CA",
        "DoctorId": "321e4567-e89b-12d3-a456-426614174888",
        "AdmissionDate": "2024-09-12",
        "DischargeDate": null, // Not discharged yet
        "IsActive": false,
        "ProfilePictureId": "janesmith.png"
      }
    ];
    return patients;
  };
  public GetAppointment(): IAppointment[] {
    const appointments = [
      {
        "AppointmentId": "123e4567-e89b-12d3-a456-426614174001",
        "PatientId": "123e4567-e89b-12d3-a456-426614174001",
        "DoctorId": "321e4567-e89b-12d3-a456-426614174999",
        "AppointmentDate": "2024-09-15T10:00:00Z",
        "Purpose": "Routine Checkup",
        "IsCompleted": false
      },
      {
        "AppointmentId": "123e4567-e89b-12d3-a456-426614174002",
        "PatientId": "123e4567-e89b-12d3-a456-426614174002",
        "DoctorId": "321e4567-e89b-12d3-a456-426614174888",
        "AppointmentDate": "2024-09-16T14:30:00Z",
        "Purpose": "Follow-up Consultation",
        "IsCompleted": true
      }
    ];
    return appointments;
  }
  

}

// Interface for Doctor
export interface IDoctor {
  DoctorId: string;
  DoctorName: string;
  DoctorSpecialization: number; // Assuming this corresponds to an enum
  DoctorExperience: number;
  DoctorContactNumber: string;
  DoctorEmail: string;
  DepartmentId: string;
  IsActive: boolean;
}

// Interface for Patient
export interface IPatient {
  PatientId: string;
  PatientName: string;
  PatientAge: number;
  PatientGender: string;
  PatientContactNumber: string;
  PatientEmail: string;
  PatientAddress: string;
  DoctorId: string;
  AdmissionDate: string;
  DischargeDate: string | null; // Allows null for not yet discharged patients
  IsActive: boolean;
  ProfilePictureId: string;
}

// Interface for Appointment
export interface IAppointment {
  AppointmentId: string;
  PatientId: string;
  DoctorId: string;
  AppointmentDate: string;
  Purpose: string;
  IsCompleted: boolean;
}

