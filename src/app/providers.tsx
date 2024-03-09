'use client';
import Navbar from '@/components/navigation';
import AuthProvider from '@/context/AuthProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Navbar />
      <main>{children}</main>
    </AuthProvider>
  );
}

export default Providers;
