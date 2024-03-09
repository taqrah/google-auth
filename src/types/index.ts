interface User {
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | null;
  photoURL: string | null;
}

interface AuthContextValues {
  user: User | null;
  logout: () => void;
  authenticate: () => void;
}

type State = {
  authenticated: boolean;
  user: User | null;
};

type Action = {
  type: string;
  payload?: any;
};
