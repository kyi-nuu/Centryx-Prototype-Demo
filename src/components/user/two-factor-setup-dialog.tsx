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
import Image from 'next/image';
import { Copy, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { AnimatePresence, motion } from 'framer-motion';

type TwoFactorSetupDialogProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onSuccess: () => void;
};

const manualSetupCode = 'JBSWY3DPEHPK3PXP';
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=otpauth%3A%2F%2Ftotp%2FCentryx%3Ajohn.doe%40example.com%3Fsecret%3D${manualSetupCode}%26issuer%3DCentryx`;


export function TwoFactorSetupDialog({ isOpen, onOpenChange, onSuccess }: TwoFactorSetupDialogProps) {
  const [step, setStep] = useState<'scan' | 'verify'>('scan');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(manualSetupCode);
    toast({
      title: 'Copied to clipboard',
      description: 'The manual setup code has been copied.',
    });
  };

  const handleContinue = () => {
    setStep('verify');
  };

  const handleVerify = () => {
    setIsLoading(true);
    // Simulate API call to verify the code
    setTimeout(() => {
      setIsLoading(false);
      if (verificationCode === '123456') { // Placeholder for actual verification logic
        toast({
          title: 'Two-Factor Authentication Enabled',
          description: 'Your account is now protected with 2FA.',
        });
        onSuccess();
        resetState();
      } else {
        toast({
          variant: 'destructive',
          title: 'Invalid Code',
          description: 'The verification code is incorrect. Please try again.',
        });
      }
    }, 1000);
  };
  
  const resetState = () => {
    setStep('scan');
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
        <AnimatePresence mode="wait">
            <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
            >
                {step === 'scan' && (
                <>
                    <DialogHeader>
                    <DialogTitle className="text-xl">Set Up Two-Factor Authentication</DialogTitle>
                    <DialogDescription>
                        Scan the QR code with your authenticator app (e.g., Google Authenticator, Authy).
                    </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col items-center gap-4 py-4">
                        <div className="p-4 bg-white rounded-lg">
                            <Image
                                src={qrCodeUrl}
                                alt="QR Code for 2FA setup"
                                width={200}
                                height={200}
                                data-ai-hint="qr code"
                            />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Or enter this code manually:
                        </p>
                        <div className="relative w-full">
                            <Input
                            readOnly
                            value={manualSetupCode}
                            className="pr-10 bg-input font-mono tracking-wider"
                            />
                            <Button
                            size="icon"
                            variant="ghost"
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                            onClick={handleCopyToClipboard}
                            >
                            <Copy className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleContinue} className="w-full">Continue</Button>
                    </DialogFooter>
                </>
                )}

                {step === 'verify' && (
                <>
                    <DialogHeader>
                    <DialogTitle className="text-xl">Verify Your Code</DialogTitle>
                    <DialogDescription>
                        Enter the 6-digit code from your authenticator app to complete the setup.
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
                        <Button onClick={() => setStep('scan')} variant="outline">Back</Button>
                        <Button onClick={handleVerify} disabled={isLoading || verificationCode.length !== 6} className="w-24">
                            {isLoading ? <Loader2 className="animate-spin" /> : 'Verify'}
                        </Button>
                    </DialogFooter>
                </>
                )}
            </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
