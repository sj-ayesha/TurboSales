import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  createDb(){

    let  cars =  [
      {  id:  1,  title:  '2015 mercedes-benz cla 250', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", feature: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book", odometer: "18, 875", extColor: "Black", bodyType: "Sedan", transmission:"Automatic"},

      {  id:  2,  title:  '2016 mercedes-benz cla 250', description: "Lorem Ipsum is si", feature: "Lorem Ipsum is simply d", odometer: "18, 875", extColor: "Black", bodyType: "Sedan", transmission:"Automatic"}
    ];
 
    return {cars};
 
   }
}
