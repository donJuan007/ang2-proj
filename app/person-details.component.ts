import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Person } from './person';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from './people.service';

@Component({

    selector: 'person-details',
    template: `
    <section *ngIf="person">
    <h2> You selected: {{ person.name}} </h2>
    <h3>Description</h3>
    <p>
    {{ person.name }} weights {{ person.weight }} and is {{ person.height }} tall.
    </p>
    </section>
    `
    
})

export class PersonDetailsComponent implements OnInit, OnDestroy{
    //mark the person property as input to this component
  person : Person;
  sub: any;

  constructor( private peopleService: PeopleService, private route: ActivatedRoute)
  {}

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.person = this.peopleService.get(id);
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }
}
