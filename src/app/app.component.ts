import { Component } from '@angular/core';
import { Person } from './models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = null;
  age = null;
  people = [];
  younger = new Person('','');
  older = new Person('','');
  public total = this.people.length;

  addPerson(){
    this.people.push(new Person(this.name, this.age));
    this.name = null;
    this.age = null;
    this.total = this.people.length;
    this.getAges();
  }

  deletePerson(person){
    this.people.splice(this.people.indexOf(person),1);
    this.total = this.people.length;
    this.getAges();
  }

  getAges(){
    var younger = 9999;
    var older = 0;

    for(let person of this.people){
      if (person.age < younger){
        younger = person.age;
        this.younger = person;
      }
      if (person.age > older){
        older = person.age;
        this.older = person;
      }
    }
  }
}
