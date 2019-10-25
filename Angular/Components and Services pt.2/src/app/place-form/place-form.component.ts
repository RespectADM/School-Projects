import { Component, OnInit } from '@angular/core';
import { Places } from '../models/places';

@Component({
  selector: 'app-place-form',
  templateUrl: './place-form.component.html',
  styleUrls: ['./place-form.component.css']
})
export class PlaceFormComponent implements OnInit {
  model: Places = new Places();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Sumbit Successful: ', this.model);
  }

}
