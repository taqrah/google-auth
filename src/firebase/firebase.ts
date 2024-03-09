import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAwFl1-D9xw87D1JJ3u5D5U_RR82rl2E1Q',
  authDomain: 'gists-b788a.firebaseapp.com',
  projectId: 'gists-b788a',
  storageBucket: 'gists-b788a.appspot.com',
  messagingSenderId: '376166576429',
  appId: '1:376166576429:web:62eb64f618864ace11a3a4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
