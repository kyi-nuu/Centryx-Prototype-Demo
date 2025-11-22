'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { ShieldAlert } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TwoFactorSetupDialog } from "./two-factor-setup-dialog";

export function SecurityForm() {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleTwoFactorToggle = (checked: boolean) => {
    if (checked) {
      setIsDialogOpen(true);
    } else {
      // Here you would add logic to disable 2FA, possibly with a confirmation
      console.log("Disabling 2FA");
      setIsTwoFactorEnabled(false);
    }
  };

  const handleSetupSuccess = () => {
    setIsTwoFactorEnabled(true);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Card className="w-full max-w-4xl mx-auto border-0 shadow-none">
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Manage your account security and authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Alert className="border-primary/50 [&>svg]:text-primary">
            <ShieldAlert className="h-4 w-4" />
            <div className="flex items-center justify-between">
              <div>
                <AlertTitle className="text-primary">Two-Factor Authentication</AlertTitle>
                <AlertDescription className="text-muted-foreground">
                  Enable 2FA to secure your account
                </AlertDescription>
              </div>
              <Switch 
                id="two-factor-auth" 
                checked={isTwoFactorEnabled}
                onCheckedChange={handleTwoFactorToggle}
              />
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
      <TwoFactorSetupDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSuccess={handleSetupSuccess}
      />
    </>
  );
}
