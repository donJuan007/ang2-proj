import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: `
  <h1> Listing of People </h1>
   <ul>
    <li *ngFor="let person of people">
    <a href="#" [routerLink]="['/persons', person.id]">
    {{ person.name}}
    </a>
    </li>
    </ul>      
  `,
  providers: [PeopleService]
})

export class PeopleListComponent implements OnInit{
    people: Person[] = [];
    selectedPerson: Person;

    constructor(private _peopleService : PeopleService) {}
    
    ngOnInit() {
         this.people = this._peopleService.getAll();
    }




}