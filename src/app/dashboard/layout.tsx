import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full bg-muted/40 overflow-hidden">
      <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {children}
      </main>
      <DashboardSidebar />
    </div>
  );
}
