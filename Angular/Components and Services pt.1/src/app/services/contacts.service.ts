import { Injectable } from '@angular/core';
import { Contacts } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contacts[] = [
    {
      firstName: 'Alfred',
      lastName: 'Planter',
      phoneNumber: '234-345-4567',
      email: 'alfredtheplanter@gmail.com',
    },
    {
     firstName: 'Brandon',
     lastName: 'Beck',
     phoneNumber: '293-482-2342',
     email: 'brandon.beck@yahoo.com',
    },
    {
      firstName:  'Daisy',
      lastName: 'Harvey',
      phoneNumber: '839-283-4583',
      email: 'daisyharvey22@gmail.com',
     },
     {
      firstName:  'Patric',
      lastName: 'Wilson',
      phoneNumber: '283-472-3891',
      email: 'patrickwilson19@yahoo.com',
     }
  ]

  constructor() { }
}
