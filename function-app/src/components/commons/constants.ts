export const REACT_APP_PUBLIC_URL = 'http://localhost:9000';

export const BACKEND_URLS = {
  'tasks': `/api/tasks`,
  'users': {
    baseUrl: `/api/users`,
    getByGoogleId: `/api/users/byGoogleProfileId`
  } 
}

export const AUTH_COOKIES = {
  AUTH_TYPE: 'authType',
  GOOGLE_ID: 'googleId',
  ACCESS_TOKEN: 'accessToken',
  ID_TOKEN: 'idToken',
  EXPIRES_IN: 'expiresIn'
}