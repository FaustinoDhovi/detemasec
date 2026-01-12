'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import StudentDashboard from '@/app/components/StudentDashboard';

// This line is crucial to prevent the Vercel Prerender error
export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/portal');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium">Loading Student Profile...</p>
      </div>
    );
  }

  if (session) {
    return <StudentDashboard />;
  }

  return null;
}