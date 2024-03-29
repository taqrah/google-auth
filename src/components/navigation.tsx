import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Image from 'next/image';
import { Home } from './icons';

const Navbar: React.FC = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header className='fixed top-0 w-full shadow-md py-4 lg:py-5 px-6'>
        <div className='flex justify-between items-center max-w-screen-lg mx-auto'>
          <div className='tracking-widest font-semibold'>
            <Link href='/'>
              <Home aria-hidden='true'/>
            </Link>
          </div>
          <nav>
            <ul
              id='navbar-menu'
              className={` flex justify-between items-center gap-10 bg-transparent text-accent p-0 text-lg font-medium transition duration-300`}
            >
              {user ? (
                <li>
                  <button
                    type='button'
                    onClick={handleLogout}
                    className=' btn text-darkTxt dark:text-lightTxt p-2 rounded-md hover:shadow-sm min-w-[5rem]'
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    href='/sign-in'
                    className=' btn text-darkTxt dark:text-lightTxt p-2 rounded-md hover:shadow-sm block min-w-[5rem] text-center'
                  >
                    Login
                  </Link>
                </li>
              )}
              {user ? (
                <li>
                  <Link href='/profile'>
                    <Image
                      loader={() => user?.photoURL || ''}
                      src={user.photoURL || ''}
                      alt='your profile picture'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                  </Link>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
