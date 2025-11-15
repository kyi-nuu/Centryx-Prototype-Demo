import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

type StatsCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  status: string;
  statusColor: string;
  total: number;
  online: number;
  offline: number;
};

export function StatsCard({
  title,
  subtitle,
  icon,
  iconBgColor,
  iconColor,
  status,
  statusColor,
  total,
  online,
  offline,
}: StatsCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge className="flex items-center gap-1 bg-transparent text-foreground border-none">
            <div className={cn('h-2 w-2 rounded-full', statusColor)} />
            {status}
          </Badge>
        </div>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className={cn('p-4 rounded-lg', iconBgColor, iconColor)}>
            {icon}
          </div>
          <div className="grid grid-cols-3 gap-2 text-center w-full ml-4">
            <div>
              <p className="text-2xl font-bold">{total}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="p-2 rounded-lg border border-green-500/50 bg-green-500/10">
              <p className="text-xl font-bold text-green-500">{online}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
             <div className="p-2 rounded-lg border border-red-500/50 bg-red-500/10">
              <p className="text-xl font-bold text-red-500">{offline}</p>
              <p className="text-xs text-muted-foreground">Offline</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
