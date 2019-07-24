import React, { useEffect, useState } from 'react';
import './Main.scss';
import Login from './auth/Login';
import DashboardShell from './containers/DashboardShell';
import AuthContext from './contexts/AuthContext';

const Main = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [principal, setPrincipal] = useState({});

  useEffect(() => {
    //check if user is already authenticated and cookies have not expired & set isAuthorized & principal based on it
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthorized, principal }}>
      <AuthContext.Consumer>
        {
          value => {
            return value.isAuthorized ? <DashboardShell/> :
              <Login setIsAuthorized={setIsAuthorized} setPrincipal={setPrincipal}/>
          }
        }
      </AuthContext.Consumer>
    </AuthContext.Provider>
  );
}

export default Main;