import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full bg-muted/40">
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <DashboardSidebar />
    </div>
  );
}
