import { Card, CardContent } from '@/components/ui/card';
import { Camera, Lightbulb, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Switch } from '../ui/switch';

export function MotionAutomationCard() {
  return (
    <Card className="h-full bg-green-900/30 border-green-500/30">
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Zap className="h-5 w-5 text-green-400" />
            <div>
              <h3 className="font-semibold text-foreground">Motion Automation</h3>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs text-green-400">Active</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Switch defaultChecked id="motion-automation" />
            <label htmlFor='motion-automation' className="text-sm font-medium text-green-400">ON</label>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Camera className="h-6 w-6 text-muted-foreground" />
          <div className="flex-1 mx-4 h-1 bg-muted/50 rounded-full relative overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-blue-500 to-yellow-500"
              style={{ width: '70%' }}
            ></div>
          </div>
          <Lightbulb className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          Motion detected → Lights on
        </p>
      </CardContent>
    </Card>
  );
}
