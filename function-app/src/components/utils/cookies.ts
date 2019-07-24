import Cookies from 'universal-cookie';

import { AUTH_COOKIES } from '../commons/constants';
import { Credential } from '../types/mapping';

export const setAuthCookies = (accessToken, googleId,) => {
  const cookies = new Cookies();

  cookies.set(AUTH_COOKIES.ACCESS_TOKEN, accessToken.token, {
    maxAge: accessToken[AUTH_COOKIES.EXPIRES_IN],
    secure: true,
    sameSite: true
  })
  cookies.set(AUTH_COOKIES.GOOGLE_ID, googleId, {
    maxAge: accessToken[AUTH_COOKIES.EXPIRES_IN],
    secure: true,
    sameSite: true
  })
}

export const getAuthDetails = (): Credential => {
  const cookies = new Cookies();
  return {
    accessToken: cookies.get(AUTH_COOKIES.ACCESS_TOKEN),
    googleId: cookies.get(AUTH_COOKIES.GOOGLE_ID)
  }
}