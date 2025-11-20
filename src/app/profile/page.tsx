'use client';

import { useState } from 'react';
import { ProfileHeader } from '@/components/profile/profile-header';

export type ProfileTab = 'profile' | 'security' | 'users';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<ProfileTab>('profile');

  return (
    <div className="flex flex-col h-full">
      <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-8">
        {/* Content for the selected tab will be rendered here */}
        {activeTab === 'profile' && <div>Profile Content</div>}
        {activeTab === 'security' && <div>Security Content</div>}
        {activeTab === 'users' && <div>Users Content</div>}
      </div>
    </div>
  );
}
