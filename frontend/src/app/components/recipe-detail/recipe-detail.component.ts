import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() name = '';
  @Input() category = '';
  @Input() dateAdded = new Date();
  @Input() rating = 0;

  constructor() {}

  ngOnInit(): void {}
}
