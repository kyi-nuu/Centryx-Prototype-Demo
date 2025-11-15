import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Camera, Lightbulb, Zap, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function MotionAutomationCard() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 flex flex-col justify-between h-full bg-green-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold text-foreground">Motion Automation</h3>
            <Badge variant="outline" className="border-green-500 bg-transparent text-green-500 flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Active
            </Badge>
          </div>
          <div className="flex items-center gap-2">
             <CheckCircle className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-green-500">ON</span>
            <Switch defaultChecked id="motion-automation" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Camera className="h-6 w-6 text-muted-foreground" />
          <div className="flex-1 mx-4 h-2 bg-muted rounded-full relative overflow-hidden">
            <div
              className="absolute h-full bg-gradient-to-r from-blue-500 to-yellow-500"
              style={{ width: '70%' }}
            ></div>
          </div>
          <Lightbulb className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          Motion detected → Lights on
        </p>
      </CardContent>
    </Card>
  );
}
