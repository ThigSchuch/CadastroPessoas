import { Component } from '@angular/core';
import { Person } from './models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = null;
  people = new Array();

  addPerson(){
    this.people.push(new Person(this.name));
    this.name = null;
  }
}
