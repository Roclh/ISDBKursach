import { Injectable } from '@angular/core';
import {Humanoid} from '../samples/humanoid';

@Injectable({
  providedIn: 'root'
})
export class HumanoidService {

  public allHumanoids: Humanoid[];

  constructor() { }

  getAllHumanoids(): Humanoid[]{
    this.allHumanoids=[{
      id: 1, fullName:"Nikita Kolesnikov", sex:"Male", birthDate:"20.11.2001", deathDate:"20.11.2022",location:"[31.12;31.16]", isHuman: false
    },{
      id: 2, fullName:"Semen Shibaev", sex:"Male", birthDate:"20.11.2001", deathDate:"20.11.2022",location:"[31.12;31.16]", isHuman: false
    },{
      id: 3, fullName:"Peotr Markov", sex:"Male", birthDate:"20.11.2001", deathDate:"20.11.2022",location:"[31.12;31.16]", isHuman: true
    },{
      id: 4, fullName:"Evgeniy Tsopa", sex:"Male", birthDate:"20.11.2001", deathDate:"20.11.2022",location:"[31.12;31.16]", isHuman: true
    },{
      id: 5, fullName:"Ivan Ivanov", sex:"Male", birthDate:"20.11.2001", deathDate:"20.11.2022",location:"[31.12;31.16]", isHuman: null
    },{
      id: 6, fullName:"Stepan Stepanovich", sex:"Male", birthDate:"20.11.2001", deathDate:"20.11.2022",location:"[31.12;31.16]", isHuman: false
    },{
      id: 7, fullName:"Klim Sanich", sex:"Male", birthDate:"20.11.2001", deathDate:"20.11.2022",location:"[31.12;31.16]", isHuman: null
    }];
    return this.allHumanoids;
  }
}
