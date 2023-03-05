interface IRecipe {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  ingredientsAndAmount: IIngredientsAndAmount[];
  instruction: { text: string; ingredients: IIngredientsAndAmount }[];
  preparationTimeInMinutes: number;
  rating: number;
  comments: IComment[];
  tags: ITag[];
  img: string;
}

interface IIngredientsAndAmount {
  amount: { value: number; unit: string };
  ingredient: IIngredient;
}

enum Units {
  "kg",
  "cm",
  "mm²",
}
interface IAmount {
  value: number;
  unit: Units; // oder enum?
}

interface IIngredient {
  id: string; // objectID
  name: string;
  alternativeNames: string[];
}

interface IComment {
  createdAt: Date;
  updatedAt: Date;
  text: string;
  pinned: boolean;
}
interface ITag {
  name: string;
}
