import { DashboardSidebar } from '@/components/dashboard/sidebar';

export default function CctvLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-muted/40">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 h-full">
          {children}
        </main>
      </div>
    </div>
  );
}
