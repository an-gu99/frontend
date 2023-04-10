import { createAction, props } from '@ngrx/store';

export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';

export const AUTHENTICATE_SUCCESS = '[Auth] Login';
export const LOGOUT = '[Auth] Logout';

export const SIGNUP_START = '[Auth] Sign up Start';

export const AUTO_LOGIN = '[Auth] Auto Login';

export const Authenticate_Success = createAction(
  AUTHENTICATE_SUCCESS,
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
    redirect: boolean;
  }>()
);

export const Logout = createAction(LOGOUT);

export const LoginStart = createAction(
  LOGIN_START,
  props<{
    email: string;
    password: string;
  }>()
);

export const AuthenticateFail = createAction(
  AUTHENTICATE_FAIL,
  props<{
    errorMessage: string;
  }>()
);

export const SignUpStart = createAction(
  SIGNUP_START,
  props<{
    email: string;
    password: string;
  }>()
);

export const AutoLogin = createAction(AUTO_LOGIN);
