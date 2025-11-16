import { Card, CardContent } from '@/components/ui/card';
import { Camera, Lightbulb, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function MotionAutomationCard() {
  return (
    <Card className="h-full bg-green-900/30 border-green-500/30 flex-1">
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-green-400" />
            <div>
              <h3 className="font-semibold text-foreground text-sm">Motion Automation</h3>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs text-green-400">Active</span>
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-green-400 border-green-400/50 bg-green-900/50 text-xs px-2 py-1">
            <span className="mr-1.5">✓</span> ON
          </Badge>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 my-4">
            <div className="flex items-center justify-between w-full">
                <Camera className="h-6 w-6 text-muted-foreground" />
                <div className="flex-1 mx-4 h-1 bg-muted/50 rounded-full relative overflow-hidden">
                    <div
                    className="absolute h-full bg-gradient-to-r from-blue-500 to-yellow-500"
                    style={{ width: '100%' }}
                    ></div>
                </div>
                <Lightbulb className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
            Motion detected → Lights on
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
