import { DashboardHeader } from '@/components/dashboard/header';
import { StatsCard } from '@/components/dashboard/stats-card';
import { MotionAutomationCard } from '@/components/dashboard/motion-automation-card';
import { EnergyUsageChart } from '@/components/dashboard/energy-usage-chart';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { Camera, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <main className="flex flex-col flex-1 p-4 sm:p-6 lg:p-8 gap-6">
      <DashboardHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="lg:col-span-2 xl:col-span-1">
          <StatsCard
            title="Cameras"
            subtitle="CCTV Surveillance"
            icon={<Camera className="h-8 w-8" />}
            status="Active"
            statusColor="bg-blue-500"
            total={12}
            online={9}
            offline={3}
            iconBgColor="bg-blue-500/10"
            iconColor="text-blue-500"
          />
        </div>
        <div className="lg:col-span-2 xl:col-span-1">
          <StatsCard
            title="Lights"
            subtitle="Smart Lighting"
            icon={<Lightbulb className="h-8 w-8" />}
            status="Active"
            statusColor="bg-yellow-500"
            total={48}
            online={42}
            offline={6}
            iconBgColor="bg-yellow-500/10"
            iconColor="text-yellow-500"
          />
        </div>
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-2">
          <MotionAutomationCard />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EnergyUsageChart />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </main>
  );
}
