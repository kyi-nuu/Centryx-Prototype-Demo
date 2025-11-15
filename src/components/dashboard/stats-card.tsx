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
    <Card className="h-full flex flex-col justify-between">
       <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <CardDescription>{subtitle}</CardDescription>
          </div>
           <div className={cn('p-3 rounded-lg shadow-lg', iconBgColor, iconColor)}>
              {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg border border-border">
              <Camera className="h-4 w-4 mx-auto text-muted-foreground mb-1"/>
              <p className="text-xl font-bold">{total}</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
            <div className="p-2 rounded-lg border border-green-500/50 bg-green-500/10">
              <Check className="h-4 w-4 mx-auto text-green-500 mb-1"/>
              <p className="text-xl font-bold text-green-500">{online}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
             <div className="p-2 rounded-lg border border-red-500/50 bg-red-500/10">
              <X className="h-4 w-4 mx-auto text-red-500 mb-1"/>
              <p className="text-xl font-bold text-red-500">{offline}</p>
              <p className="text-xs text-muted-foreground">Offline</p>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
