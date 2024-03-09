'use client';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import AuthContext from '@/context/AuthContext';
import { redirect } from 'next/navigation';
import google from '/public/google.svg';
import Image from 'next/image';
import { toast } from 'sonner';

function Signin() {
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
    <div className='min-h-screen grid place-content-center'>
      <div className='card flex justify-between p-6 flex-col gap-5 rounded-md shadow-md min-h-[20rem] min-w-[20rem]'>
        <div className='mt-4'>
          <h1 className='font-bold text-4xl'>Welcome</h1>
          <small>Sign in to continue</small>
        </div>

        <div>
          <button
            type='button'
            onClick={handleSignUp}
            className='bg-white flex items-center gap-4 p-3 rounded-md hover:shadow-sm w-full'
          >
            <Image src={google} alt='google' width={24} height={24} />
            <span className='dark:text-lightTxt'>Sign in with Google</span>
          </button>
        </div>

        <div className='text-sm flex gap-1 justify-center'>
          <p>New user?</p>
          <Link
            href='/sign-up'
            className='underline font-bold focus-visible:outline-dashed focus-visible:outline-2'
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
