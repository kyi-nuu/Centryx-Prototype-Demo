
'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Switch } from "@/components/ui/switch";
import { Loader2, ShieldAlert } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { TwoFactorSetupDialog } from "./two-factor-setup-dialog";
import { useToast } from "@/hooks/use-toast";
import { TwoFactorDisableDialog } from "./two-factor-disable-dialog";
import { cn } from "@/lib/utils";

export function SecurityForm() {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isSetupDialogOpen, setIsSetupDialogOpen] = useState(false);
  const [isDisableDialogOpen, setIsDisableDialogOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTwoFactorToggle = (checked: boolean) => {
    if (checked) {
      setIsSetupDialogOpen(true);
    } else {
      setIsDisableDialogOpen(true);
    }
  };

  const handleSetupSuccess = () => {
    setIsTwoFactorEnabled(true);
    setIsSetupDialogOpen(false);
  };
  
  const handleDisableSuccess = () => {
    setIsTwoFactorEnabled(false);
    setIsDisableDialogOpen(false);
    toast({
      title: "Two-Factor Authentication Disabled",
      description: "2FA has been turned off for your account.",
      variant: 'destructive'
    })
  }

  const handleUpdate = () => {
    setIsLoading(true);
    setTimeout(() => {
      // In a real app, you'd validate and save the data
      setIsLoading(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      toast({
        title: "Security Settings Updated",
        description: "Your security information has been successfully saved.",
      });
    }, 1500);
  };

  const handleCancel = () => {
    // Reset password fields to empty
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };


  return (
    <>
      <Card className="w-full max-w-4xl mx-auto border-0 shadow-none">
        <CardHeader>
          <CardTitle>Security Settings</CardTitle>
          <CardDescription>Manage your account security and authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <Alert className={cn(
              isTwoFactorEnabled 
                ? "border-green-500/50 [&>svg]:text-green-500" 
                : "border-primary/50 [&>svg]:text-primary"
            )}>
            <ShieldAlert className="h-4 w-4" />
            <div className="flex items-center justify-between">
              <div>
                <AlertTitle className={cn(isTwoFactorEnabled && "text-green-500")}>Two-Factor Authentication</AlertTitle>
                <AlertDescription className="text-muted-foreground">
                  {isTwoFactorEnabled
                    ? "2FA is currently enabled for your account."
                    : "Enable 2FA to add an extra layer of security."
                  }
                </AlertDescription>
              </div>
              <Switch 
                id="two-factor-auth" 
                checked={isTwoFactorEnabled}
                onCheckedChange={handleTwoFactorToggle}
                className="data-[state=checked]:bg-green-500"
              />
            </div>
          </Alert>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" placeholder="Enter current password" className="bg-input" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" placeholder="Enter new password" className="bg-input" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" placeholder="Confirm new password" className="bg-input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4 bg-secondary/30">
            <div>
              <Label htmlFor="login-alerts" className="font-semibold">Login Alerts</Label>
              <p className="text-sm text-muted-foreground">Receive email notifications for new logins</p>
            </div>
            <Switch id="login-alerts" checked={loginAlerts} onCheckedChange={setLoginAlerts} />
          </div>

          <div className="flex justify-start gap-2">
            <Button onClick={handleUpdate} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              Update Security
            </Button>
            <Button variant="outline" onClick={handleCancel} disabled={isLoading}>Cancel</Button>
          </div>
        </CardContent>
      </Card>
      <TwoFactorSetupDialog 
        isOpen={isSetupDialogOpen}
        onOpenChange={setIsSetupDialogOpen}
        onSuccess={handleSetupSuccess}
      />
      <TwoFactorDisableDialog
        isOpen={isDisableDialogOpen}
        onOpenChange={setIsDisableDialogOpen}
        onSuccess={handleDisableSuccess}
      />
    </>
  );
}
