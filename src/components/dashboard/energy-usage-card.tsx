'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart } from 'recharts';
import { Bolt } from 'lucide-react';

const chartData = [
  { day: 'Monday', kWh: 1.5 },
  { day: 'Tuesday', kWh: 1.8 },
  { day: 'Wednesday', kWh: 2.5 },
  { day: 'Thursday', kWh: 4.1 },
  { day: 'Friday', kWh: 5.5 },
  { day: 'Saturday', kWh: 6.8 },
  { day: 'Sunday', kWh: 7.2 },
];

const chartConfig = {
  kWh: {
    label: 'kWh',
    color: 'hsl(var(--chart-2))',
  },
};

export function EnergyUsageCard() {
  return (
    <Card className="h-full">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center gap-2">
            <Bolt className="h-5 w-5 text-green-500" />
            <CardTitle className="text-sm font-semibold">Energy Usage</CardTitle>
        </div>
        <div className="flex items-baseline gap-2 pt-2">
            <p className="text-3xl font-bold">245.2</p>
            <p className="text-sm text-muted-foreground">kWh</p>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[80px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorKWhCard" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-kWh)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--color-kWh)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="kWh"
              type="monotone"
              stroke="var(--color-kWh)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorKWhCard)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
