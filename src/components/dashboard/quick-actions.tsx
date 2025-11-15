import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Power, LogOut, Sun, Moon, Leaf, Sparkles } from 'lucide-react';

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <CardTitle>Quick Actions</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        <Button size="lg" className="h-20 text-lg bg-primary hover:bg-primary/90 col-span-1">
          <Power className="mr-2 h-5 w-5" /> All Lights On
        </Button>
        <Button size="lg" variant="destructive" className="h-20 text-lg bg-red-600 hover:bg-red-700 text-white col-span-1">
          <Power className="mr-2 h-5 w-5" /> All Lights Off
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg flex-col gap-2">
          <LogOut className="h-5 w-5" />
          <span className='text-sm'>Log Out</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg flex-col gap-2">
          <Sun className="h-5 w-5" />
          <span className='text-sm'>Day Mode</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg flex-col gap-2">
          <Moon className="h-5 w-5" />
          <span className='text-sm'>Night Mode</span>
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg flex-col gap-2">
          <Leaf className="h-5 w-5" />
          <span className='text-sm'>Eco Mode</span>
        </Button>
      </CardContent>
    </Card>
  );
}
