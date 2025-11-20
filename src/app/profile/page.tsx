'use client';

import { useState } from 'react';
import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfileForm } from '@/components/profile/profile-form';

export type ProfileTab = 'profile' | 'security' | 'users';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('profile');

  return (
    <main className="flex-1 flex flex-col h-full overflow-y-auto">
      <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        {activeTab === 'profile' && <ProfileForm />}
        {activeTab === 'security' && <div className="text-center p-8">Security Settings (Coming Soon)</div>}
        {activeTab === 'users' && <div className="text-center p-8">User Management (Coming Soon)</div>}
      </div>
    </main>
  );
}
