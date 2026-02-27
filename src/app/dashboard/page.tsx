'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';

import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const t = useTranslations('Common');

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex items-center gap-3">
          <LayoutDashboard className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">{t('buttons.dashboard') || 'Dashboard'}</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Welcome back!</h3>
            <p className="text-muted-foreground">
              {session?.user?.email ? `Logged in as ${session.user.email}` : 'Welcome to Jun-Ai'}
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Role</h3>
            <p className="text-muted-foreground capitalize">
              {(session?.user as { role?: string })?.role || 'User'}
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">Getting Started</h3>
            <p className="text-muted-foreground">
              More features coming soon. Stay tuned!
            </p>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
