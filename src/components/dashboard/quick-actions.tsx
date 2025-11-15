import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Power, LogOut, Sun, Moon, Leaf } from 'lucide-react';
import { Sparkles } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2 p-3">
        <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-semibold">Quick Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-3 gap-2 flex-1 p-3 pt-0">
        <Button size="sm" className="h-full text-xs bg-primary hover:bg-primary/90 text-primary-foreground">
          <Power className="h-4 w-4 mr-2" /> All On
        </Button>
        <Button size="sm" variant="destructive" className="h-full text-xs">
          <Power className="h-4 w-4 mr-2" /> All Off
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-xs">
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </Button>
         <Button variant="secondary" size="sm" className="h-full text-xs">
          <Sun className="h-4 w-4" />
          <span>Day Mode</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-xs">
          <Moon className="h-4 w-4" />
          <span>Night Mode</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-xs">
          <Leaf className="h-4 w-4" />
          <span>Eco Mode</span>
        </Button>
      </CardContent>
    </Card>
  );
}
