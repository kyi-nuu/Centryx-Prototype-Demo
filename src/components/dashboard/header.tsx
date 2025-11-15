'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export function DashboardHeader() {
  return (
    <Card className="flex items-center justify-between p-4">
       <div className="flex items-center gap-3">
        <div className="relative">
            <Avatar className="h-10 w-10">
                <AvatarImage src="https://picsum.photos/seed/avatar/100/100" alt="User avatar" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-background"></div>
        </div>
        <div className="text-left">
            <p className="text-xs text-muted-foreground">Welcome back,</p>
            <p className="font-semibold text-foreground text-sm">John Doe</p>
        </div>
       </div>
       <Badge variant="outline" className='border-primary text-primary text-xs font-normal'>Administrator</Badge>
    </Card>
  );
}
