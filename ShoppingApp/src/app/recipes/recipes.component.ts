import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  standalone: true,
  selector: 'app-recipes',
  imports: [RecipeListComponent, RouterModule],
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {}
