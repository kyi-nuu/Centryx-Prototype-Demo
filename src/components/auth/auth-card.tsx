'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LoginForm } from './login-form';
import { TwoFactorForm } from './two-factor-form';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '../logo';
import { ClientOnly } from '../client-only';

export function AuthCard() {
  const [step, setStep] = useState<'login' | 'two-factor'>('login');
  const [userEmail, setUserEmail] = useState('');

  const handleLoginSuccess = (email: string) => {
    setUserEmail(email);
    setStep('two-factor');
  };

  const handleBackToLogin = () => {
    setStep('login');
  };

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-8">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>
        <ClientOnly>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: step === 'login' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: step === 'login' ? 50 : -50 }}
              transition={{ duration: 0.3 }}
            >
              {step === 'login' && <LoginForm onSuccess={handleLoginSuccess} />}
              {step === 'two-factor' && <TwoFactorForm email={userEmail} onBack={handleBackToLogin} />}
            </motion.div>
          </AnimatePresence>
        </ClientOnly>
      </CardContent>
    </Card>
  );
}
