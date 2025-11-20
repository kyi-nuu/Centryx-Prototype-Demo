import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function LightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full bg-muted/40">
       <div className="flex-1 overflow-auto">
        <main className="h-full">
          {children}
        </main>
      </div>
      <DashboardSidebar />
    </div>
  );
}
