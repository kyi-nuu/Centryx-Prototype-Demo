'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export function DashboardHeader() {
  return (
    <Card className="flex items-center justify-between p-2">
       <div className="flex items-center gap-2">
        <div className="relative">
            <Avatar className="h-8 w-8">
                <AvatarImage src="https://picsum.photos/seed/avatar/100/100" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-500 border border-background"></div>
        </div>
        <div className="text-left">
            <p className="text-[10px] text-muted-foreground">Welcome back,</p>
            <p className="font-semibold text-foreground text-xs">John Doe</p>
        </div>
       </div>
       <Badge variant="outline" className='border-primary text-primary text-[10px] font-normal px-1.5 py-0'>Admin</Badge>
    </Card>
  );
}
