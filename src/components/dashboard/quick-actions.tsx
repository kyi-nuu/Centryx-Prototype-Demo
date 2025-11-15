import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Power, LogOut, Sun, Moon, Leaf } from 'lucide-react';
import { Sparkles } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 grid-rows-3 gap-4 flex-1">
        <Button size="lg" className="h-full text-sm bg-primary hover:bg-primary/90 text-primary-foreground">
          <Power className="h-4 w-4 mr-2" /> All On
        </Button>
        <Button size="lg" variant="destructive" className="h-full text-sm">
          <Power className="h-4 w-4 mr-2" /> All Off
        </Button>
        <Button variant="secondary" size="lg" className="h-full text-sm">
          <LogOut className="h-4 w-4 mr-2" />
          <span>Log Out</span>
        </Button>
         <Button variant="secondary" size="lg" className="h-full text-sm">
          <Sun className="h-4 w-4 mr-2" />
          <span>Day Mode</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-full text-sm">
          <Moon className="h-4 w-4 mr-2" />
          <span>Night Mode</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-full text-sm">
          <Leaf className="h-4 w-4 mr-2" />
          <span>Eco Mode</span>
        </Button>
      </CardContent>
    </Card>
  );
}
