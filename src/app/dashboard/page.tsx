import { StatsCard } from '@/components/dashboard/stats-card';
import { MotionAutomationCard } from '@/components/dashboard/motion-automation-card';
import { EnergyUsageChart } from '@/components/dashboard/energy-usage-chart';
import { QuickActions } from '@/components/dashboard/quick-actions';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
            title="Cameras"
            subtitle="CCTV Surveillance"
            icon={
            <Image
                src="https://picsum.photos/seed/cctv/100/100"
                alt="CCTV Camera"
                width={64}
                height={64}
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
        <StatsCard
            title="Lights"
            subtitle="Smart Lighting"
            icon={
            <Image
                src="https://picsum.photos/seed/lightbulb/100/100"
                alt="Smart Lightbulb"
                width={64}
                height={64}
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
        <MotionAutomationCard />
      <div className="lg:col-span-2">
        <EnergyUsageChart />
      </div>
      <div>
        <QuickActions />
      </div>
    </div>
  );
}
