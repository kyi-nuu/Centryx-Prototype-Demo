import { Card, CardContent } from '@/components/ui/card';
import { Camera, Lightbulb, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function MotionAutomationCard() {
  return (
    <Card className="bg-primary/10 border-primary/20">
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
                <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-base">Motion Automation</h3>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary">Active</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 text-xs px-2 py-0.5">
            <span className="mr-1.5">✓</span> ON
          </Badge>
        </div>
        <div className="flex flex-col items-center justify-center my-1">
            <div className="flex items-center justify-between w-full">
                <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md" />
                    <Camera className="h-6 w-6 text-primary z-10 relative" />
                </div>
                <div className="flex-1 mx-4 h-1 bg-muted/50 rounded-full relative overflow-hidden">
                    <div className="absolute h-full bg-gradient-to-r from-primary to-yellow-500 w-full" />
                </div>
                <div className="relative">
                    <div className="absolute -inset-1 bg-yellow-500/20 rounded-full blur-md" />
                    <Lightbulb className="h-6 w-6 text-yellow-400 z-10 relative" />
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
