import { StatsCard } from '@/components/dashboard/stats-card';
import { MotionAutomationCard } from '@/components/dashboard/motion-automation-card';
import { EnergyUsageChart } from '@/components/dashboard/energy-usage-chart';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { DashboardHeader } from '@/components/dashboard/header';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-3 grid-rows-[auto_1fr] gap-6 p-0">
      <div className="lg:col-span-1">
        <StatsCard
          title="Cameras"
          subtitle="CCTV Surveillance"
          icon={
            <Image
              src="https://picsum.photos/seed/cctv/100/100"
              alt="CCTV Camera"
              width={56}
              height={56}
              className="rounded-lg"
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
      <div className="lg:col-span-1">
        <StatsCard
          title="Lights"
          subtitle="Smart Lighting"
          icon={
            <Image
              src="https://picsum.photos/seed/lightbulb/100/100"
              alt="Smart Lightbulb"
              width={56}
              height={56}
              className="rounded-lg"
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
      <div className="lg:col-span-1 flex flex-col gap-6">
        <DashboardHeader />
        <MotionAutomationCard />
      </div>
      <div className="lg:col-span-2">
        <EnergyUsageChart />
      </div>
      <div className="lg:col-span-1">
        <QuickActions />
      </div>
    </div>
  );
}
