import { Ingredient } from './ingredient';

export type User = {
  id: string;
  name: string;
  email: string;
  preferences: Ingredient[];
  allergies: Ingredient[];
};

export const hasAllergy = (user: User, ingredient: Ingredient): boolean => {
  return user.allergies.includes(ingredient);
};

export const hasPreference = (user: User, ingredient: Ingredient): boolean => {
  return user.preferences.includes(ingredient);
};
