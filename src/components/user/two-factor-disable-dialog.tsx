
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type TwoFactorDisableDialogProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: () => void;
};

export function TwoFactorDisableDialog({ isOpen, onOpenChange, onSuccess }: TwoFactorDisableDialogProps) {
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate API call to verify the code
    setTimeout(() => {
      setIsLoading(false);
      if (verificationCode.length === 6) {
        onSuccess();
        resetState();
      } else {
        toast({
          variant: 'destructive',
          title: 'Invalid Code',
          description: 'The verification code must be 6 digits.',
        });
      }
    }, 1000);
  };
  
  const resetState = () => {
    setVerificationCode('');
  }

  const handleOpenChange = (open: boolean) => {
    if (!open) {
        resetState();
    }
    onOpenChange(open);
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
        <DialogTitle className="text-xl">Disable Two-Factor Authentication</DialogTitle>
        <DialogDescription>
            Enter the 6-digit code from your authenticator app to confirm.
        </DialogDescription>
        </DialogHeader>
        <div className="py-4">
            <Input
                placeholder="123456"
                maxLength={6}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="h-14 text-center text-2xl tracking-[0.5em] bg-input"
            />
        </div>
        <DialogFooter>
            <Button onClick={() => onOpenChange(false)} variant="outline">Cancel</Button>
            <Button onClick={handleVerify} disabled={isLoading || verificationCode.length !== 6} className="w-32" variant="destructive">
                {isLoading ? <Loader2 className="animate-spin" /> : 'Disable'}
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
