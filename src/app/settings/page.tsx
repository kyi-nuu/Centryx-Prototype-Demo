'use client';

import { AddDeviceCard } from '@/components/settings/add-device-card';
import { SettingsHeader } from '@/components/settings/settings-header';

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full">
      <SettingsHeader />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <AddDeviceCard />
      </div>
    </div>
  );
}
