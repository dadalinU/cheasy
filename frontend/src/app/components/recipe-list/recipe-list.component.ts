import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

interface IRecipeData {
  name: string;
  category: string;
  dateAdded: Date;
  rating: number;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public data: IRecipeData[] = [
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Frevelsalat',
      category: 'Salat',
      dateAdded: new Date(),
      rating: 1,
    },
    {
      name: 'Mumpitzbrot',
      category: 'Gebäck',
      dateAdded: new Date(),
      rating: 1,
    },
  ];
  constructor(private readonly _communication: CommunicationService) {}

  ngOnInit(): void {
    // this.data = this._communication.getRecipes();
  }
}
