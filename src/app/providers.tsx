'use client';
import Navbar from '@/components/navigation';
import AuthProvider from '@/context/AuthProvider';
import { usePathname } from 'next/navigation';
import { Toaster } from 'sonner';

function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const authRoutes =
    pathname.includes('/sign-in') || pathname.includes('/sign-up');

  return (
    <AuthProvider>
      {!authRoutes && <Navbar />}
      <main>{children}</main>
      <Toaster />
    </AuthProvider>
  );
}

export default Providers;
