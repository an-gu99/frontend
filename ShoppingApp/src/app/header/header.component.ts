import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.action';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropDownDirective } from '../shared/dropdown.directive';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, RouterModule, DropDownDirective],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSupscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.userSupscription = this.store
      .select('auth')
      .pipe(map((authState) => authState.user))
      .subscribe((user) => {
        this.isAuthenticated = !!user;
      });
  }

  onSaveData() {
    this.store.dispatch(RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(RecipeActions.DeleteAllRecipes());
    this.store.dispatch(AuthActions.Logout());
  }

  ngOnDestroy(): void {
    this.userSupscription.unsubscribe();
  }
}
