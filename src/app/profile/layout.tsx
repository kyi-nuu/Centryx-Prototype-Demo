'use client';

import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { ProfileHeader } from '@/components/profile/profile-header';
import React, { useState } from 'react';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState('profile');

  // Clone the child element to pass down the activeTab prop
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab } as any);
    }
    return child;
  });

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10">
          <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {childrenWithProps}
        </main>
      </div>
    </div>
  );
}
