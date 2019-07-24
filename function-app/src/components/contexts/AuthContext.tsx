import React from 'react';
import { UserProfile } from 'components/types/mapping';

const AuthContext = React.createContext<Partial<{ principal: UserProfile, isAuthorized: boolean }>>({
  principal: {},
  isAuthorized: false
});

export default AuthContext;