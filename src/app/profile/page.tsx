'use client';

import React, { useState } from 'react';
import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfileForm } from '@/components/profile/profile-form';
import { SecurityTab } from '@/components/profile/security-tab';
import { UsersTab } from '@/components/profile/users-tab';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <div className="sticky top-0 z-10">
        <ProfileHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="h-full">
          {activeTab === 'profile' && <ProfileForm />}
          {activeTab === 'security' && <SecurityTab />}
          {activeTab === 'users' && <UsersTab />}
        </div>
      </div>
    </>
  );
}
