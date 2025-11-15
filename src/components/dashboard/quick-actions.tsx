import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Power, LogOut, Sun, Moon, Leaf } from 'lucide-react';
import { Sparkles } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2 p-1.5">
        <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-primary" />
            <CardTitle className="text-[10px] font-semibold">Quick Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-3 gap-1.5 flex-1 p-1.5 pt-0">
        <Button size="sm" className="h-full text-[10px] bg-primary hover:bg-primary/90 text-primary-foreground py-0 px-2">
          <Power className="h-3 w-3 mr-1" /> All On
        </Button>
        <Button size="sm" variant="destructive" className="h-full text-[10px] py-0 px-2">
          <Power className="h-3 w-3 mr-1" /> All Off
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-[10px] py-0 px-2">
          <LogOut className="h-3 w-3 mr-1" />
          <span>Log Out</span>
        </Button>
         <Button variant="secondary" size="sm" className="h-full text-[10px] py-0 px-2">
          <Sun className="h-3 w-3 mr-1" />
          <span>Day Mode</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-[10px] py-0 px-2">
          <Moon className="h-3 w-3 mr-1" />
          <span>Night Mode</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-[10px] py-0 px-2">
          <Leaf className="h-3 w-3 mr-1" />
          <span>Eco Mode</span>
        </Button>
      </CardContent>
    </Card>
  );
}
