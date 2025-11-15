'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export function DashboardHeader() {
  return (
    <Card className="flex items-center justify-between p-1.5">
       <div className="flex items-center gap-2">
        <div className="relative">
            <Avatar className="h-7 w-7">
                <AvatarImage src="https://picsum.photos/seed/avatar/100/100" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-green-500 border border-background"></div>
        </div>
        <div className="text-left">
            <p className="text-[9px] text-muted-foreground">Welcome back,</p>
            <p className="font-semibold text-foreground text-[11px]">John Doe</p>
        </div>
       </div>
       <Badge variant="outline" className='border-primary text-primary text-[9px] font-normal px-1 py-0'>Admin</Badge>
    </Card>
  );
}
