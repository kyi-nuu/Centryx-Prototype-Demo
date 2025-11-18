'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { ProfileHeader } from '@/components/profile/profile-header';
import { useState } from 'react';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10">
          <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Pass activeTab to children */}
          {children &&
            (children as any).type({
              ... (children as any).props,
              activeTab,
            })}
        </main>
      </div>
    </div>
  );
}