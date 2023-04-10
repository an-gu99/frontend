import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import { map } from 'rxjs';

import * as RecipeActions from '../store/recipe.action';
import { CommonModule } from '@angular/common';
import { DropDownDirective } from 'src/app/shared/dropdown.directive';

@Component({
  standalone: true,
  selector: 'app-recipe-detail',
  imports: [RouterModule, CommonModule, DropDownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.store
        .select('recipes')
        .pipe(
          map((recipesState) =>
            recipesState.recipes.find((_, index) => index === this.id)
          )
        )
        .subscribe((recipe) => (this.recipe = recipe));
    });
  }

  addIngredientsToShoppingList() {
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(this.recipe.ingredients)
    );
  }

  onDeleteRecipe() {
    this.store.dispatch(RecipeActions.DeleteRecipe({ index: this.id }));
    this.router.navigate(['/recipes']);
  }
}
