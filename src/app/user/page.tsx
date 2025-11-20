'use client';

import { useState } from 'react';
import { UserHeader } from '@/components/user/user-header';
import { ProfileForm } from '@/components/user/profile-form';
import { SecurityForm } from '@/components/user/security-form';

export type ActiveTab = 'profile' | 'security' | 'users';

export default function UserPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('security');

  return (
    <div className="flex flex-col h-full">
      <UserHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'profile' && <ProfileForm />}
        {activeTab === 'security' && <SecurityForm />}
        {activeTab === 'users' && <div className="text-center mt-10">User Management Coming Soon</div>}
      </div>
    </div>
  );
}
