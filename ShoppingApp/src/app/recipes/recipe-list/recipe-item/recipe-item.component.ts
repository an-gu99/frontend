import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  standalone: true,
  selector: 'app-recipe-item',
  imports: [RouterModule],
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;
}
