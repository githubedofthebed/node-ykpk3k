import { Component } from '@angular/core';

import { patients } from '../patients';

@Component({
  selector: 'app-patient-listes',
  templateUrl: './patient-listes.component.html',
  styleUrls: ['./patient-listes.component.css'],
})
export class PatientListesComponent {
  patients = patients;
}
