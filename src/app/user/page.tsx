'use client';

import { useState } from 'react';
import { UserHeader } from '@/components/user/user-header';
import { ProfileForm } from '@/components/user/profile-form';

export type ActiveTab = 'profile' | 'security' | 'users';

export default function UserPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');

  return (
    <div className="flex flex-col h-full">
      <UserHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'profile' && <ProfileForm />}
        {/* Later, you can add components for other tabs here */}
        {activeTab === 'security' && <div className="text-center mt-10">Security Settings Coming Soon</div>}
        {activeTab === 'users' && <div className="text-center mt-10">User Management Coming Soon</div>}
      </div>
    </div>
  );
}
