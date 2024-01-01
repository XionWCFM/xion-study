import { Ingredient } from './ingredient';

export type ProductTitle = string;

export type Product = {
  id: string;
  title: string;
  price: number;
  toppings: Ingredient[];
};

export const ingredients: Record<Ingredient, string> = {
  chocolate: 'Chocolate',
  cocoa: 'Cocoa Powder',
  cherry: 'Cherry',
  marshmallow: 'Marshmallow',
  peanuts: 'Peanut Butter',
};

export const totalPrice = (products: Product[]): number => {
  return products.reduce((total, { price }) => total + price, 0);
};
