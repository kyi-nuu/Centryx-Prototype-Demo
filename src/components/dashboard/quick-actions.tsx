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
      <CardContent className="grid grid-cols-2 gap-4">
        <Button size="lg" className="h-20 text-lg bg-primary hover:bg-primary/90">
          <Power className="mr-2 h-5 w-5" /> All Lights On
        </Button>
        <Button size="lg" variant="destructive" className="h-20 text-lg bg-red-600 hover:bg-red-700 text-white">
          <Power className="mr-2 h-5 w-5" /> All Lights Off
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg">
          <Sun className="mr-2 h-5 w-5" /> Day Mode
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg">
          <Moon className="mr-2 h-5 w-5" /> Night Mode
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg">
          <LogOut className="mr-2 h-5 w-5" /> Log Out
        </Button>
        <Button variant="secondary" size="lg" className="h-20 text-lg">
          <Leaf className="mr-2 h-5 w-5" /> Eco Mode
        </Button>
      </CardContent>
    </Card>
  );
}
