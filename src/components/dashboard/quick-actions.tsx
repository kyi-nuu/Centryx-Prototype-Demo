import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Power, LogOut, Sun, Moon, Leaf, Sparkles } from 'lucide-react';

export function QuickActions() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-base font-semibold">Quick Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-2 flex-1">
        <Button size="lg" className="h-full text-sm bg-primary hover:bg-primary/90 col-span-1 flex-col gap-1">
          <Power className="h-5 w-5" /> All On
        </Button>
        <Button size="lg" variant="destructive" className="h-full text-sm col-span-1 flex-col gap-1">
          <Power className="h-5 w-5" /> All Off
        </Button>
        <Button variant="secondary" size="lg" className="h-full text-sm flex-col gap-1">
          <LogOut className="h-5 w-5" />
          <span>Log Out</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-full text-sm flex-col gap-1">
          <Sun className="h-5 w-5" />
          <span>Day Mode</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-full text-sm flex-col gap-1">
          <Moon className="h-5 w-5" />
          <span>Night Mode</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-full text-sm flex-col gap-1">
          <Leaf className="h-5 w-5" />
          <span>Eco Mode</span>
        </Button>
      </CardContent>
    </Card>
  );
}
