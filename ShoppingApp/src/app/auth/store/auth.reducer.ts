import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState = {
  user: null,
  authError: null,
  loading: false,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.Authenticate_Success, (state, action) => ({
    ...state,
    authError: null,
    user: new User(
      action.email,
      action.userId,
      action.token,
      action.expirationDate
    ),
    loading: false,
  })),
  on(AuthActions.Logout, (state) => ({
    ...state,
    user: null,
  })),
  on(AuthActions.LoginStart, AuthActions.SignUpStart, (state) => ({
    ...state,
    authError: null,
    loading: true,
  })),
  on(AuthActions.AuthenticateFail, (state, action) => ({
    ...state,
    user: null,
    authError: action.errorMessage,
    loading: false,
  }))
);

export function authReducer(state: State, action: Action) {
  return _authReducer(state, action);
}
