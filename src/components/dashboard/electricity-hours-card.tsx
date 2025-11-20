'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart } from 'recharts';
import { Clock } from 'lucide-react';

const chartData = [
  { day: 'Monday', hours: 8 },
  { day: 'Tuesday', hours: 10 },
  { day: 'Wednesday', hours: 12 },
  { day: 'Thursday', hours: 9 },
  { day: 'Friday', hours: 11 },
  { day: 'Saturday', hours: 14 },
  { day: 'Sunday', hours: 13 },
];

const chartConfig = {
  hours: {
    label: 'Hours',
    color: 'hsl(var(--chart-1))',
  },
};

export function ElectricityHoursCard() {
  return (
    <Card className="h-full">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <CardTitle className="text-sm font-semibold">Total Hours On</CardTitle>
        </div>
        <div className="flex items-baseline gap-2 pt-2">
            <p className="text-3xl font-bold">1,834</p>
            <p className="text-sm text-muted-foreground">hours</p>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[80px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideIndicator />}
                />
            <Bar
              dataKey="hours"
              fill="var(--color-hours)"
              radius={2}
              barSize={10}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
