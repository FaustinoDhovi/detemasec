'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import StudentDashboard from '@/app/components/StudentDashboard';

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div style={{ padding: '50px', textAlign: 'center' }}>Loading...</div>;
  }

  if (!session) {
    redirect('/portal');
  }

  return <StudentDashboard />;
}
