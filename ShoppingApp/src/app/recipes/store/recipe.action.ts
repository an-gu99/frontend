import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const SET_RECIPES = '[Recipes] Set Recipes';
export const STORE_RECIPES = '[Recipes] Store Recipes';
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';

export const ADD_RECIPE = '[Recipes] Add Recipe';
export const UPDATE_RECIPE = '[Recipes] Update Recipe';
export const DELETE_RECIPE = '[Recipes] Delete Recipe';

export const DELETE_ALL_RECIPES = '[Recipes] Delete All Recipes';

export const SetRecipes = createAction(
  SET_RECIPES,
  props<{
    recipes: Recipe[];
  }>()
);

export const StoreRecipes = createAction(STORE_RECIPES);

export const AddRecipe = createAction(
  ADD_RECIPE,
  props<{
    recipe: Recipe;
  }>()
);

export const UpdateRecipe = createAction(
  UPDATE_RECIPE,
  props<{
    index: number;
    recipe: Recipe;
  }>()
);

export const DeleteRecipe = createAction(
  DELETE_RECIPE,
  props<{
    index: number;
  }>()
);

export const DeleteAllRecipes = createAction(DELETE_ALL_RECIPES);

export const FetchRecipes = createAction(FETCH_RECIPES);
