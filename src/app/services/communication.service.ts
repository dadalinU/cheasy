import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  getRecipes() {
    //TODO: implement http-Request
    console.log('gets recipes');
    return [];
  }
}
