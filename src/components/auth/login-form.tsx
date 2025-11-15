'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { Eye, EyeOff, Lightbulb, Shield, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

const formSchema = z.object({
  username: z.string().min(1, { message: 'Please enter your username.' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long.' }),
  remember: z.boolean().default(false),
});

type LoginFormProps = {
  onSuccess: (email: string) => void;
};

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      remember: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onSuccess(values.username); // Using username as email for demo
      setIsLoading(false);
    }, 1000);
  }

  return (
    <>
      <CardHeader className="p-0 pb-4 text-center">
        <CardTitle className="text-3xl font-bold text-foreground">CENTRYX</CardTitle>
        <CardDescription className="text-muted-foreground">
          Smart Lighting & CCTV Control Platform
        </CardDescription>
      </CardHeader>
      <div className="flex justify-center gap-4 mb-6">
        <Button variant="outline" className="bg-secondary hover:bg-secondary/80 text-foreground">
          <Lightbulb className="mr-2 h-4 w-4 text-blue-400" /> Smart Lights
        </Button>
        <Button variant="outline" className="bg-secondary hover:bg-secondary/80 text-foreground">
          <Video className="mr-2 h-4 w-4 text-green-400" /> CCTV
        </Button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} className="bg-input h-11" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      {...field}
                      className="bg-input h-11 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-between pt-1">
            <FormField
              control={form.control}
              name="remember"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">Remember me</FormLabel>
                </FormItem>
              )}
            />
            <Button variant="link" size="sm" className="p-0 h-auto text-primary">
              Forgot password?
            </Button>
          </div>
          <Button type="submit" size="lg" className="w-full h-11 text-base font-semibold" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : <Shield />}
            Sign In
          </Button>
        </form>
      </Form>
       <div className="mt-4 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          <Shield className="h-4 w-4 text-green-500" />
          Secured with 2FA Authentication
        </p>
      </div>
    </>
  );
}
