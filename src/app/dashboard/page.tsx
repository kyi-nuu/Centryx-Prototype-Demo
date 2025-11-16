import { StatsCard } from '@/components/dashboard/stats-card';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { DashboardHeader } from '@/components/dashboard/header';
import { EnergyUsageChart } from '@/components/dashboard/energy-usage-chart';
import { MotionAutomationCard } from '@/components/dashboard/motion-automation-card';
import { Lightbulb, Video } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
        <StatsCard
          title="Cameras"
          subtitle="CCTV Surveillance"
          icon={
            <Video
              className="h-10 w-10 text-blue-500"
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
            <Lightbulb
                className="h-10 w-10 text-yellow-500"
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
