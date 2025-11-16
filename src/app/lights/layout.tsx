import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function LightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
