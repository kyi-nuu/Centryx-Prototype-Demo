'use client';

import { useState } from 'react';
import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfileTab } from '@/components/profile/profile-header';
import { ProfileForm } from '@/components/profile/profile-form';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('profile');

  return (
    <div className="flex flex-col h-full">
      <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        {activeTab === 'profile' && <ProfileForm />}
        {activeTab === 'security' && <div>Security Content</div>}
        {activeTab === 'users' && <div>Users Content</div>}
      </div>
    </div>
  );
}
