import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'sonner';

import { FloatingControls } from '@/components/floating-controls';
import RootProvider from '@/provider/root-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jun-Ai - AI Interview Platform for Modern Hiring',
  description:
    'Our AI-driven platform transforms the recruitment process from job posting to candidate selection. Automate interviews, analyze resumes, and make data-driven hiring decisions.',
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader color="hsl(var(--primary))" />
        <RootProvider>
          <div className="relative flex min-h-screen flex-col">
            <FloatingControls />
            <div className="flex-1">{children}</div>
          </div>
          <Toaster richColors />
        </RootProvider>
      </body>
    </html>
  );
}
