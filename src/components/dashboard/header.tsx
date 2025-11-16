'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export function DashboardHeader() {
  return (
    <Card className="flex flex-col justify-between p-3 h-full">
       <div className="flex items-center justify-between">
            <div className="text-left">
                <p className="font-semibold text-foreground text-md">Welcome back,</p>
                <p className="text-2xl text-muted-foreground font-bold">John Doe</p>
            </div>
            <Badge variant="outline" className='border-primary text-primary text-xs font-normal px-2 py-0.5'>Admin</Badge>
       </div>
       <div className="flex items-center gap-3">
            <div className="relative">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="https://picsum.photos/seed/avatar/100/100" alt="User avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-background"></div>
            </div>
            <div className='text-left'>
                <p className='text-sm font-medium'>john.doe@example.com</p>
                <p className='text-xs text-muted-foreground'>Last login: 10 mins ago</p>
            </div>
       </div>
    </Card>
  );
}
