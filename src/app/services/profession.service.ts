import { Injectable } from '@angular/core';
import {Profession} from '../samples/profession';

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {
  constructor() { }

  getProfession(id: number): Profession{
    return {id: 1, name: "Программист", description: "Ничего не делает, это обман"};
  }
}
