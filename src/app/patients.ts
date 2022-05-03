export interface Patient {
  id: number;
  mail: string;
  mdp: string;
  role: string;
}

export const patients = [
  {
    id: 1234,
    mail: 'frederic@gmail.com',
    mdp: 'coucou23_32',
    role: 'Infirmier',
  },
  {
    id: 2345,
    mail: 'georges23@gmail.com',
    mdp: 'G567!jus',
    role: 'Médecin généraliste',
  },
  {
    id: 3563,
    mail: 'françoise@yahoo.fr',
    mdp: 'fran_C45/',
    role: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
