import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X, Camera, Lightbulb } from 'lucide-react';
import { Badge } from '../ui/badge';

type StatsCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
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
  status,
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
           <Badge variant="outline" className={cn('text-xs', status === 'Active' ? 'border-blue-500 text-blue-500' : 'border-yellow-500 text-yellow-500')}>
            <div className={cn('w-2 h-2 rounded-full mr-2', status === 'Active' ? 'bg-blue-500' : 'bg-yellow-500')} />
            {status}
           </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex justify-center my-4'>
            <div className="p-4 rounded-lg bg-primary/10">
                {icon}
            </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg border border-border">
              {title === 'Cameras' ? <Camera className="h-4 w-4 mx-auto text-muted-foreground mb-1" /> : <Lightbulb className="h-4 w-4 mx-auto text-muted-foreground mb-1" />}
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
