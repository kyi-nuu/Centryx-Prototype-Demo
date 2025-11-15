import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import { cn } from '@/lib/utils';
import { Camera, Check, X } from 'lucide-react';

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
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge className={cn("flex items-center gap-1.5 text-xs py-1 px-2.5", statusColor)}>
            <div className="h-2 w-2 rounded-full bg-current" />
            {status}
          </Badge>
        </div>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
            <div className={cn('p-4 rounded-2xl shadow-lg', iconBgColor, iconColor)}>
              {React.cloneElement(icon as React.ReactElement, { className: 'h-12 w-12' })}
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg border border-border">
              <Camera className="h-5 w-5 mx-auto text-muted-foreground mb-1"/>
              <p className="text-2xl font-bold">{total}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="p-3 rounded-lg border border-green-500/50 bg-green-500/10">
              <Check className="h-5 w-5 mx-auto text-green-500 mb-1"/>
              <p className="text-xl font-bold text-green-500">{online}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
             <div className="p-3 rounded-lg border border-red-500/50 bg-red-500/10">
              <X className="h-5 w-5 mx-auto text-red-500 mb-1"/>
              <p className="text-xl font-bold text-red-500">{offline}</p>
              <p className="text-xs text-muted-foreground">Offline</p>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
