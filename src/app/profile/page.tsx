'use client';

import { ProfileForm } from '@/components/profile/profile-form';
import { SecurityTab } from '@/components/profile/security-tab';
import { UsersTab } from '@/components/profile/users-tab';

type ProfilePageProps = {
  activeTab?: string;
};

export default function ProfilePage({ activeTab }: ProfilePageProps) {
  return (
    <div className="h-full">
      {activeTab === 'profile' && <ProfileForm />}
      {activeTab === 'security' && <SecurityTab />}
      {activeTeb === 'users' && <UsersTab />}
    </div>
  );
}