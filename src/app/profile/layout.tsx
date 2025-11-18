import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { ProfileHeader } from '@/components/profile/profile-header';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 z-10">
          <ProfileHeader />
        </div>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
