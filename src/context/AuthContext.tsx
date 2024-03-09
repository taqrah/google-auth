import { createContext } from 'react';

const AuthContext = createContext<AuthContextValues>({
  user: null,
  logout : () => {},
  authenticate: () => {},
});

export default AuthContext;
