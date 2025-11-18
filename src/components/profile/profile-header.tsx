'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, User, Users } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function ProfileHeader() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <Card className="rounded-none border-x-0 border-t-0 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Profile Management</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
        <div className="flex border-b border-border">
          <Button
            variant="ghost"
            onClick={() => setActiveTab('profile')}
            className={cn(
              'rounded-none border-b-2 border-transparent hover:bg-transparent hover:border-primary/50 hover:text-primary py-4 px-6',
              activeTab === 'profile' ? 'border-primary text-primary font-semibold' : 'text-muted-foreground'
            )}
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab('security')}
            className={cn(
              'rounded-none border-b-2 border-transparent hover:bg-transparent hover:border-primary/50 hover:text-primary py-4 px-6',
              activeTab === 'security' ? 'border-primary text-primary font-semibold' : 'text-muted-foreground'
            )}
          >
            <Shield className="mr-2 h-4 w-4" />
            Security
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab('users')}
            className={cn(
              'rounded-none border-b-2 border-transparent hover:bg-transparent hover:border-primary/50 hover:text-primary py-4 px-6',
              activeTab === 'users' ? 'border-primary text-primary font-semibold' : 'text-muted-foreground'
            )}
          >
            <Users className="mr-2 h-4 w-4" />
            Users
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
