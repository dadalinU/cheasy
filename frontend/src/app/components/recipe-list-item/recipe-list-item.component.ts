import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() name = '';
  @Input() category = '';
  @Input() dateAdded = new Date();
  @Input() rating = 0;

  constructor() {}

  ngOnInit(): void {}
}
