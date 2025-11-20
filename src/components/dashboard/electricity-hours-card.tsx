'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, LabelList } from 'recharts';
import { Clock } from 'lucide-react';

const chartData = [
  { day: 'Mon', hours: 8 },
  { day: 'Tue', hours: 10 },
  { day: 'Wed', hours: 12 },
  { day: 'Thu', hours: 9 },
  { day: 'Fri', hours: 11 },
  { day: 'Sat', hours: 14 },
  { day: 'Sun', hours: 13 },
];

const chartConfig = {
  hours: {
    label: 'Hours',
    color: 'hsl(var(--chart-1))',
  },
};

export function ElectricityHoursCard() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <CardTitle className="text-sm font-semibold">Total Hours On</CardTitle>
        </div>
        <div className="flex items-baseline gap-2 pt-2">
            <p className="text-3xl font-bold">1,834</p>
            <p className="text-sm text-muted-foreground">hours</p>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-1 min-h-[120px]">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 10,
              left: 10,
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
              radius={4}
              barSize={20}
            >
              <LabelList dataKey="hours" position="top" offset={8} className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
