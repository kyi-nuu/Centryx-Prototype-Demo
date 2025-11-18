'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import React from 'react';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
