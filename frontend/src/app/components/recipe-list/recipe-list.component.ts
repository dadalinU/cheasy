import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  data = [];
  constructor(private readonly _communication:CommunicationService) { }

  ngOnInit(): void {
    // this.data = this._communication.getRecipes();
  }

}
