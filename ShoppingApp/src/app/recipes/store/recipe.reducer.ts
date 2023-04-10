import { Action, createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipe.model';

import * as RecipeAction from './recipe.action';

export interface State {
  recipes: Recipe[];
}

const initialState = {
  recipes: [],
};

const _recipeReducer = createReducer(
  initialState,

  on(RecipeAction.SetRecipes, (state, action) => ({
    ...state,
    recipes: [...action.recipes],
  })),
  on(RecipeAction.AddRecipe, (state, action) => ({
    ...state,
    recipes: [...state.recipes, action.recipe],
  })),
  on(RecipeAction.UpdateRecipe, (state, action) => {
    const updatedRecipe = {
      ...state.recipes[action.index],
      ...action.recipe,
    };

    const updatedRecipes = [...state.recipes];
    updatedRecipes[action.index] = updatedRecipe;

    return {
      ...state,
      recipes: updatedRecipes,
    };
  }),

  on(RecipeAction.DeleteRecipe, (state, action) => ({
    ...state,
    recipes: state.recipes.filter((_, index) => index !== action.index),
  })),
  on(RecipeAction.DeleteAllRecipes, () => initialState)
);

export function recipeReducer(state: State, action: Action) {
  return _recipeReducer(state, action);
}
