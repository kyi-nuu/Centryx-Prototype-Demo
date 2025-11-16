import { StatsCard } from '@/components/dashboard/stats-card';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { DashboardHeader } from '@/components/dashboard/header';
import { EnergyUsageChart } from '@/components/dashboard/energy-usage-chart';
import { MotionAutomationCard } from '@/components/dashboard/motion-automation-card';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatsCard
          title="Cameras"
          subtitle="CCTV Surveillance"
          icon={
            <Image
              src="https://picsum.photos/seed/cctv-icon/100/100"
              alt="CCTV Camera"
              width={24}
              height={24}
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
        <StatsCard
          title="Lights"
          subtitle="Smart Lighting"
          icon={
            <Image
              src="https://picsum.photos/seed/lightbulb-icon/100/100"
              alt="Smart Lightbulb"
              width={24}
              height={24}
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
        <div className="md:col-span-2">
          <EnergyUsageChart />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <DashboardHeader />
        <MotionAutomationCard />
        <QuickActions />
      </div>
    </div>
  );
}
