import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, X, Camera, Lightbulb, Video } from 'lucide-react';
import { Badge } from '../ui/badge';

type StatsCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  status: string;
  total: number;
  online: number;
  offline: number;
  statusColor: string;
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
    <Card>
       <CardHeader className="p-3 pb-2">
        <div className="flex items-start justify-between">
          <div className='flex items-center gap-3'>
             <div className="p-2 rounded-lg bg-card-foreground/5">
                {icon}
            </div>
            <div>
              <CardTitle className="text-sm font-semibold">{title}</CardTitle>
              <CardDescription className="text-xs">{subtitle}</CardDescription>
            </div>
          </div>
           <Badge variant="outline" className={cn('text-xs py-0.5 px-2', title === 'Cameras' ? 'border-blue-500 text-blue-500' : 'border-yellow-500 text-yellow-500')}>
            <div className={cn('w-2 h-2 rounded-full mr-1.5', title === 'Cameras' ? 'bg-blue-500' : 'bg-yellow-500')} />
            {status}
           </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded-lg border border-border">
              {title === 'Cameras' ? <Video className="h-4 w-4 mx-auto text-muted-foreground mb-1" /> : <Lightbulb className="h-4 w-4 mx-auto text-muted-foreground mb-1" />}
              <p className="text-lg font-bold">{total}</p>
              <p className="text-[10px] text-muted-foreground">Total</p>
            </div>
            <div className="p-2 rounded-lg border border-green-500/50 bg-green-500/10">
              <Check className="h-4 w-4 mx-auto text-green-500 mb-1"/>
              <p className="text-lg font-bold text-green-500">{online}</p>
              <p className="text-[10px] text-muted-foreground">Online</p>
            </div>
             <div className="p-2 rounded-lg border border-red-500/50 bg-red-500/10">
              <X className="h-4 w-4 mx-auto text-red-500 mb-1"/>
              <p className="text-lg font-bold text-red-500">{offline}</p>
              <p className="text-[10px] text-muted-foreground">Offline</p>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
