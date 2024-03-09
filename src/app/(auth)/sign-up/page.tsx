'use client';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import { useEffect, useContext } from 'react';
import google from '/public/google.svg';
import Image from 'next/image';
import { redirect } from 'next/navigation';

function Signup() {
  const { user, authenticate } = useContext(AuthContext);

  const handleSignUp = async () => {
    authenticate();
  };

  useEffect(() => {
    if (user) {
      redirect('/');
    }
  }, [user]);

  return (
    <div className='h-screen grid place-content-center'>
      <div className='card flex justify-between p-6 flex-col gap-5 rounded-md shadow-md min-h-[20rem] min-w-[20rem]'>
        <div className='mt-4'>
          <h1 className='font-bold text-4xl'>Sign Up</h1>
          <small>create account</small>
        </div>

        <div>
          <button
            type='button'
            onClick={handleSignUp}
            className='btn flex items-center gap-4 p-3 rounded-md hover:shadow-sm w-full'
          >
            <Image src={google} alt='google' width={24} height={24} />
            <span className='dark:text-lightTxt'>Sign up with Google</span>
          </button>
        </div>

        <div className='text-sm flex gap-1 justify-center'>
          <p>have an account?</p>
          <Link
            href='/sign-in'
            className='underline font-bold focus-visible:outline-dashed focus-visible:outline-2'
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
