import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/contacts';
import { ContactsService } from '../services/contacts.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

contacts: Contacts[];

contactDataService: ContactsService;

  constructor(private contactsService: ContactsService) { 
    this.contactDataService = this.contactsService;
  }

  ngOnInit() {
    this.contacts = this.contactDataService.contacts;
  }

}
