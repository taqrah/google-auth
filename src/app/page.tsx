'use client';
import AuthContext from '@/context/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className='grid place-content-center min-h-screen px-4'>
      <div>
        {user ? (
          <div>
            <h1 className='text-3xl font-bold'>Welcome {user.firstname}</h1>
            <p className='text-lg'>Your OTP</p>
          </div>
        ) : (
          <div>
            <h1 className='text-3xl font-bold'>Welcome</h1>
            <p className='text-lg'>PLease Login to view your OTP</p>
          </div>
        )}
      </div>
    </div>
  );
}
