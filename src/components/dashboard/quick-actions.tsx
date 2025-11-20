import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Power, LogOut, Sun, Moon, Leaf } from 'lucide-react';
import { Sparkles } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="flex-1 flex flex-col">
      <CardHeader className="p-3 pb-2">
        <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <CardTitle className="text-sm font-semibold">Quick Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-2 flex-1 p-3">
        <Button size="sm" className="h-full text-xs bg-primary hover:bg-primary/90 text-primary-foreground flex-col gap-1.5 py-2">
          <Power className="h-5 w-5" /> All On
        </Button>
        <Button size="sm" variant="destructive" className="h-full text-xs flex-col gap-1.5 py-2">
          <Power className="h-5 w-5" /> All Off
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-xs flex-col gap-1.5 py-2">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-xs flex-col gap-1.5 py-2">
          <Sun className="h-5 w-5" />
          <span>Day Mode</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-xs flex-col gap-1.5 py-2">
          <Moon className="h-5 w-5" />
          <span>Night Mode</span>
        </Button>
        <Button variant="secondary" size="sm" className="h-full text-xs flex-col gap-1.5 py-2">
          <Leaf className="h-5 w-5" />
          <span>Eco Mode</span>
        </Button>
      </CardContent>
    </Card>
  );
}
