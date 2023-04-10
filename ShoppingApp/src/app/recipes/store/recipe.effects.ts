import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { Recipe } from '../recipe.model';
import * as RecipeActions from './recipe.action';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipeEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.FetchRecipes),
      switchMap(() =>
        this.http.get<Recipe[]>(
          'https://ng-complete-guide-6944c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
        )
      ),
      map((recipes) =>
        recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        })
      ),
      map((recipes) => RecipeActions.SetRecipes({ recipes }))
    )
  );

  storeRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RecipeActions.StoreRecipes),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([, recipesState]) =>
          this.http.put(
            'https://ng-complete-guide-6944c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
            recipesState.recipes
          )
        )
      ),

    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
