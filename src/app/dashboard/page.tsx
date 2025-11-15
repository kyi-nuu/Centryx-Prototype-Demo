import { StatsCard } from '@/components/dashboard/stats-card';
import { MotionAutomationCard } from '@/components/dashboard/motion-automation-card';
import { EnergyUsageChart } from '@/components/dashboard/energy-usage-chart';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { Camera, Lightbulb } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="grid h-[calc(100vh-8rem)] grid-cols-1 grid-rows-3 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <div className="md:col-span-1 lg:col-span-1 row-span-1">
        <StatsCard
          title="Cameras"
          subtitle="CCTV Surveillance"
          icon={<Camera />}
          status="Active"
          statusColor="bg-blue-500 text-white"
          total={12}
          online={9}
          offline={3}
          iconBgColor="bg-primary/10"
          iconColor="text-primary"
        />
      </div>
      <div className="md:col-span-1 lg:col-span-1 row-span-1">
        <StatsCard
          title="Lights"
          subtitle="Smart Lighting"
          icon={<Lightbulb />}
          status="Active"
          statusColor="bg-yellow-500 text-background"
          total={48}
          online={42}
          offline={6}
          iconBgColor="bg-yellow-500/10"
          iconColor="text-yellow-500"
        />
      </div>
      <div className="md:col-span-1 lg:col-span-2 row-span-1">
        <MotionAutomationCard />
      </div>
      <div className="md:col-span-3 lg:col-span-3 row-span-2">
        <EnergyUsageChart />
      </div>
      <div className="md:col-span-3 lg:col-span-1 row-span-2">
        <QuickActions />
      </div>
    </div>
  );
}
