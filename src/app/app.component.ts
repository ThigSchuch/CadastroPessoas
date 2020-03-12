import { Component } from '@angular/core';
import { Person } from './models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = null;
  people = [];
  public total = this.people.length;

  addPerson(){
    this.people.push(new Person(this.name));
    this.name = null;
    this.total = this.people.length;
  }

  deletePerson(personName){
    this.people.splice(this.people.indexOf(personName));
    this.total = this.people.length;
  }
}
