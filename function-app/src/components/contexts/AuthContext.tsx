import React from 'react';

const AuthContext = React.createContext({
  principal: {},
  isAuthorized: false
});

export default AuthContext;