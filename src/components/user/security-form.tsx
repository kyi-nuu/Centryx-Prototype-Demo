'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { ShieldAlert } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SecurityForm() {
  return (
    <Card className="w-full max-w-4xl mx-auto border-0 shadow-none">
      <CardHeader>
        <CardTitle>Security Settings</CardTitle>
        <CardDescription>Manage your account security and authentication</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <Alert className="border-yellow-500/50 bg-yellow-900/20 text-yellow-200 [&>svg]:text-yellow-400">
          <ShieldAlert className="h-4 w-4" />
          <div className="flex items-center justify-between">
            <div>
              <AlertTitle className="text-yellow-300">Two-Factor Authentication</AlertTitle>
              <AlertDescription>
                Enable 2FA to secure your account
              </AlertDescription>
            </div>
            <Switch id="two-factor-auth" />
          </div>
        </Alert>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" placeholder="Enter current password" className="bg-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" placeholder="Enter new password" className="bg-input" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" placeholder="Confirm new password" className="bg-input" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-4 bg-secondary/30">
          <div>
            <Label htmlFor="login-alerts" className="font-semibold">Login Alerts</Label>
            <p className="text-sm text-muted-foreground">Receive email notifications for new logins</p>
          </div>
          <Switch id="login-alerts" defaultChecked/>
        </div>

        <div className="flex justify-start gap-2">
          <Button>Update Security</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
}
