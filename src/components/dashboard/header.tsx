'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';

export function DashboardHeader() {
  return (
    <Card className="flex flex-col justify-between p-4 h-full">
       <div className="flex items-center justify-between">
            <div className="text-left">
                <p className="font-semibold text-foreground text-lg">Welcome back,</p>
                <p className="text-3xl text-muted-foreground font-bold">John Doe</p>
            </div>
            <Badge variant="outline" className='border-primary text-primary text-xs font-normal px-2 py-1'>Admin</Badge>
       </div>
       <div className="flex items-center gap-3 mt-4">
            <div className="relative">
                <Avatar className="h-12 w-12">
                    <AvatarImage src="https://picsum.photos/seed/avatar/100/100" alt="User avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></div>
            </div>
            <div className='text-left'>
                <p className='text-sm font-medium'>john.doe@example.com</p>
                <p className='text-xs text-muted-foreground'>Last login: 10 mins ago</p>
            </div>
       </div>
    </Card>
  );
}
