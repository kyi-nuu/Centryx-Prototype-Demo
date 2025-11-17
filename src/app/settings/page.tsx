import { SettingsHeader } from '@/components/settings/settings-header';

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full">
        <div className="sticky top-0 z-10">
            <SettingsHeader />
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            {/* Other settings content will go here */}
        </div>
    </div>
  );
}
