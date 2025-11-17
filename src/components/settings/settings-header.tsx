'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Zap } from 'lucide-react';

export function SettingsHeader() {
  return (
    <Card className="rounded-none border-x-0 border-t-0 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6 lg:p-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Configure your smart building system</p>
        </div>
        <Card className="bg-secondary/50 p-3">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Automation Mode</h3>
                    <p className="text-sm text-muted-foreground">Smart controls enabled</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-blue-500"/>
            </div>
        </Card>
      </CardContent>
    </Card>
  );
}
