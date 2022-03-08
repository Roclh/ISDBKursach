import { Injectable } from '@angular/core';
import {VoitKampfQuestion} from '../samples/voit-kampf-question';

@Injectable({
  providedIn: 'root'
})
export class VoitKampfQuestionService {

  solvedTest: VoitKampfQuestion[];

  constructor() { }

  getVoitKampfQuestions(): VoitKampfQuestion[]{
    return [{
      question: "Сколько стоит твоя мать?", answer:"У тебя точно не хватит на неё денег", result:true
    },{
      question: "Взял бы маленькую девочку себе на колени?", answer:"Я люблю детей, так что не вижу в этом проблемы", result:false
    },{
      question: "Не хочешь дунуть?", answer:"Да, люблю травку", result:true
    },{
      question: "Тебе нравится мой член?", answer:"Он не сможет в меня войти!", result:false
    }];
  }

  addVoitKampfTest(){

  }
}
