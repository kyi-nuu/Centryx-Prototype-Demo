import { StatsCard } from '@/components/dashboard/stats-card';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { DashboardHeader } from '@/components/dashboard/header';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      <div className="flex flex-col">
        <DashboardHeader />
      </div>
      <div className="flex flex-col">
        <QuickActions />
      </div>
      <div className="flex flex-col">
        <StatsCard
          title="Cameras"
          subtitle="CCTV Surveillance"
          icon={
            <Image
              src="https://picsum.photos/seed/cctv-icon/100/100"
              alt="CCTV Camera"
              width={32}
              height={32}
              className="rounded-md"
              data-ai-hint="cctv camera"
            />
          }
          status="Active"
          statusColor="bg-blue-500"
          total={12}
          online={9}
          offline={3}
        />
      </div>
      <div className="flex flex-col">
        <StatsCard
          title="Lights"
          subtitle="Smart Lighting"
          icon={
            <Image
              src="https://picsum.photos/seed/lightbulb-icon/100/100"
              alt="Smart Lightbulb"
              width={32}
              height={32}
              className="rounded-md"
              data-ai-hint="smart lightbulb"
            />
          }
          status="Active"
          statusColor="bg-yellow-500"
          total={48}
          online={42}
          offline={6}
        />
      </div>
    </div>
  );
}
