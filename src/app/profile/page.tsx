'use client';
import AuthContext from '@/context/AuthContext';
import Image from 'next/image';
import { useContext } from 'react';

function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className='min-h-screen grid place-content-center'>
        <h1>Can&apos;t access this page without logging in</h1>
      </div>
    );
  }

  return (
    <div className='min-h-screen grid place-content-center'>
      <h1 className='mb-8 text-center text-3xl font-bold'>Hello, {user?.firstname}</h1>
      <div className='flex flex-col p-6 gap-8'>
        <div className='flex justify-center'>
          <Image
            loader={() => user?.photoURL || ''}
            src={user?.photoURL || ''}
            alt='profile picture'
            width={100}
            height={100}
            className='rounded-full'
          />
        </div>
        <div className='flex gap-2'>
          <h2 className='font-semibold'>First Name:</h2>
          <p>{user.firstname}</p>
        </div>
        <div className='flex gap-2'>
          <h2 className='font-semibold'>Last Name:</h2>
          <p>{user.lastname}</p>
        </div>
        <div className='flex gap-2'>
          <h2 className='font-semibold'>Email:</h2>
          <p>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
