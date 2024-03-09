'use client';
import OtpField from '@/components/otp';
import AuthContext from '@/context/AuthContext';
import { useContext } from 'react';

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div className='grid place-content-center min-h-screen px-4'>
      <div>
        {user ? (
          <OtpField />
        ) : (
          <div>
            <h1 className='text-3xl font-bold'>Hi, There</h1>
            <p className='text-lg'>PLease Login to get your OTP</p>
          </div>
        )}
      </div>
    </div>
  );
}
