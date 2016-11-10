import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Person } from './person';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from './people.service';

@Component({

    selector: 'person-details',
    templateUrl: `app/person-details.component.html`
    
})

export class PersonDetailsComponent implements OnInit, OnDestroy{
    //mark the person property as input to this component
  person : Person;
  sub: any;

  constructor( private peopleService: PeopleService, private route: ActivatedRoute,
  private router: Router)
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

  gotoPeoplesList() {
      let link = ['./persons'];
      this.router.navigate(link);
  }

  savePersonDetails() {
      //alert(`saved!!! ${JSON.stringify(this.person)}`);
      this.peopleService.save(this.person);
  }
}
