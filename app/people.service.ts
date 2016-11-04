import { Person } from './person';
import { Injectable } from '@angular/core';

const PEOPLE : Person[] = [
            { id: 1, name: 'Tom ford', height: 177, weight: 70},
            { id: 2, name: 'Sam Cooke', height: 200, weight: 100},
            {id: 3, name: 'Luke Cage', height: 185, weight: 85},
]
@Injectable()
export class PeopleService {
    getAll() : Person[] {
        return PEOPLE;           
    }

    get(id: number) : Person {
        return PEOPLE.find(p => p.id === id);
    }
}