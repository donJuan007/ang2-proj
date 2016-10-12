import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent , PeopleListComponent, PersonDetailsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
