import React from 'react';
import GoogleLogin from 'react-google-login';
import { Button, Grid, TextField } from '@material-ui/core';

import { UserProfile } from '../types/mapping';
import './Login.scss';
import { restGet, restPost } from '../utils/RestRequest';
import { AUTH_COOKIES, BACKEND_URLS } from '../commons/constants';
import { setAuthCookies } from '../utils/cookies';

const Login = (props) => {
  const { setIsAuthorized, setPrincipal } = props;

  const saveOrFetchDetails = (profile: UserProfile) => {

    restGet(`${BACKEND_URLS.users.getByGoogleId}/${profile.googleId}`)
      .then(({ data }) => {
        if (data.data) {
          setPrincipal(data.data)
        } else {
          restPost(BACKEND_URLS.users.baseUrl, profile)
            .then(({ data }) => {
              setPrincipal(data.data);
            })
            .catch(err => {
              console.error(`Error while trying to save user details for email ${profile.email}. Error : ${err}`)
            });
        }
        setIsAuthorized(true);
      })
      .catch(err => {
        console.error(`Error while trying to fetch user details for email ${profile.email}. Error : ${err}`)
      });
  }

  const responseGoogle = (response) => {
    setIsAuthorized(true)
    saveOrFetchDetails(response.profileObj);
    setAuthCookies({
      token: response.tokenObj.access_token,
      [AUTH_COOKIES.EXPIRES_IN]: response.tokenObj.expires_in
    }, response.googleId);
  }

  const failureGoogle = (response) => {
    console.log(JSON.stringify(response));
  }

  return (
    <div className="loginDiv">
      <div className="credDiv">
        <Grid container spacing={3}>
          <Grid item xs={12} className="appTitle">
            Function
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="inputBoxNewTask"
              label="Email Id"
              placeholder="Please enter your email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              className="inputBoxNewTask"
              label="Password"
              placeholder="Please enter your password"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" className="loginButton" color="secondary">
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className="loginDivGoogle">
        <GoogleLogin
          clientId="416356827270-i8utigasis1jtu3h06c2438bomo345o6.apps.googleusercontent.com" //secret - LejDwrTXI3wvXwosDaSx4vKA
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={failureGoogle}
        />
      </div>
    </div>
  );
}

export default Login;