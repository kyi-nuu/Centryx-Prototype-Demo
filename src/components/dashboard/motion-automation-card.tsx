import { Card, CardContent } from '@/components/ui/card';
import { Camera, Lightbulb, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function MotionAutomationCard() {
  return (
    <Card className="h-full bg-green-900/30 border-green-500/30">
      <CardContent className="p-3 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-green-400" />
            <div>
              <h3 className="font-semibold text-foreground text-sm">Motion Automation</h3>
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-green-400">Active</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-green-400 border-green-400/50 bg-green-900/50 text-xs">
            <span className="mr-1">✓</span> ON
          </Badge>
        </div>
        <div className="flex items-center justify-between mt-2">
          <Camera className="h-5 w-5 text-muted-foreground" />
          <div className="flex-1 mx-2 h-0.5 bg-muted/50 rounded-full relative overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-blue-500 to-yellow-500"
              style={{ width: '70%' }}
            ></div>
          </div>
          <Lightbulb className="h-5 w-5 text-muted-foreground" />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-1">
          Motion detected → Lights on
        </p>
      </CardContent>
    </Card>
  );
}
