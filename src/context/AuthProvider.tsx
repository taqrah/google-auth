import { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import { toast } from 'sonner';

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const authenticate = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        const userDetails = {
          email: user.email,
          photoURL: user.photoURL,
          lastname: user.displayName?.split(' ')[1],
          firstname: user.displayName?.split(' ')[0],
        };

        setUser(userDetails);
        localStorage.setItem('user', JSON.stringify(userDetails));
        if (result) {
          toast.success('Sign In successful!', {
            style: { border: '1px solid hsl(147, 86%, 57%)' },
          });
        }
      })
      .catch((error) => {
        toast.error('Signup failed please try again!', {
          style: { border: '1px solid hsl(354, 84%, 57%)' },
        });
        console.log(error);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem('user');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const logout = onAuthStateChanged(auth, (currUser) => {});

    return () => {
      logout();
    };
  }, []);

  const authValues = {
    user,
    authenticate,
    logout,
  };

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;