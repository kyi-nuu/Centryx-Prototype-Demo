import { Card, CardContent } from '@/components/ui/card';
import { Camera, Lightbulb, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function MotionAutomationCard() {
  return (
    <Card className="bg-blue-900/30 border-blue-500/30">
      <CardContent className="p-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
                <Zap className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-base">Motion Automation</h3>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-sm text-blue-400">Active</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-blue-400 border-blue-400/50 bg-blue-900/50 text-xs px-2 py-0.5">
            <span className="mr-1.5">✓</span> ON
          </Badge>
        </div>
        <div className="flex flex-col items-center justify-center my-1">
            <div className="flex items-center justify-between w-full">
                <div className="relative">
                    <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-md" />
                    <Camera className="h-6 w-6 text-blue-400 z-10 relative" />
                </div>
                <div className="flex-1 mx-4 h-1 bg-muted/50 rounded-full relative overflow-hidden">
                    <div className="absolute h-full bg-gradient-to-r from-blue-500 to-yellow-500 w-full" />
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
