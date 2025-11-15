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
    <Card className="h-full flex flex-col justify-between">
       <CardHeader className="pb-2 p-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xs font-semibold">{title}</CardTitle>
            <CardDescription className="text-[10px]">{subtitle}</CardDescription>
          </div>
           <Badge variant="outline" className={cn('text-[10px] py-0 px-1.5 h-5', title === 'Cameras' ? 'border-blue-500 text-blue-500' : 'border-yellow-500 text-yellow-500')}>
            <div className={cn('w-1.5 h-1.5 rounded-full mr-1', title === 'Cameras' ? 'bg-blue-500' : 'bg-yellow-500')} />
            {status}
           </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <div className='flex justify-center my-1'>
            <div className="p-1 rounded-lg bg-primary/10">
                {icon}
            </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 text-center mt-1.5">
            <div className="p-1 rounded-lg border border-border">
              {title === 'Cameras' ? <Camera className="h-3 w-3 mx-auto text-muted-foreground mb-0.5" /> : <Lightbulb className="h-3 w-3 mx-auto text-muted-foreground mb-0.5" />}
              <p className="text-xs font-bold">{total}</p>
              <p className="text-[9px] text-muted-foreground">Total</p>
            </div>
            <div className="p-1 rounded-lg border border-green-500/50 bg-green-500/10">
              <Check className="h-3 w-3 mx-auto text-green-500 mb-0.5"/>
              <p className="text-xs font-bold text-green-500">{online}</p>
              <p className="text-[9px] text-muted-foreground">Online</p>
            </div>
             <div className="p-1 rounded-lg border border-red-500/50 bg-red-500/10">
              <X className="h-3 w-3 mx-auto text-red-500 mb-0.5"/>
              <p className="text-xs font-bold text-red-500">{offline}</p>
              <p className="text-[9px] text-muted-foreground">Offline</p>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}
