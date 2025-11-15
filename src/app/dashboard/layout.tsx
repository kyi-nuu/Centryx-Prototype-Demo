import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-muted/40 overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <main className="flex-1 p-4 sm:p-6 lg:p-8 h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
