import React, { useEffect, useState } from 'react';

import './Main.scss';
import Login from './auth/Login';
import DashboardShell from './containers/DashboardShell';
import AuthContext from './contexts/AuthContext';
import { getAuthDetails } from './utils/cookies';
import { Credential } from './types/mapping';
import { restGet } from './utils/RestRequest';
import { BACKEND_URLS } from './commons/constants';

const Main = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [principal, setPrincipal] = useState({});

  useEffect(() => {
    const credential: Credential = getAuthDetails();

    if (credential.accessToken && credential.googleId) {
      console.info("-->" + JSON.stringify(credential))
      setIsAuthorized(true);
      console.info(isAuthorized)
      restGet(`${BACKEND_URLS.users.getByGoogleId}/${credential.googleId}`)
        .then(({data}) => {
          setPrincipal(data.data);
        })
        .catch(err => {
          console.error(`Error while trying to fetch user details for email ${credential.googleId}. Error : ${err}`)
        });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthorized, principal }}>
      {
        isAuthorized ?
          <DashboardShell/> :
          <Login setIsAuthorized={setIsAuthorized} setPrincipal={setPrincipal}/>
      }
    </AuthContext.Provider>
  );
}

export default Main;