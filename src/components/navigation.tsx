import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import Image from 'next/image';
import vercel from '../../public/next.svg';

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
            <Link href='/'>GIST</Link>
          </div>
          <nav>
            <ul
              id='navbar-menu'
              className={` flex justify-between items-center gap-10 bg-transparent text-accent p-0 text-lg font-medium transition duration-300`}
            >
              {user ? (
                <li>
                  <button type='button' onClick={handleLogout} className=''>
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link href='/sign-in'>Sign-in</Link>
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
