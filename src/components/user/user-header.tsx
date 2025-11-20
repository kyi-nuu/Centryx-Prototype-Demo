'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

type ActiveTab = 'profile' | 'security' | 'users';

export function UserHeader() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');

  const getButtonClasses = (tab: ActiveTab) => {
    return cn(
      'pb-3 px-4 rounded-none border-b-2 font-medium text-muted-foreground hover:text-foreground transition-all',
      'data-[state=active]:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent',
      'hover:bg-transparent'
    );
  };
  
  const getVariant = (tab: ActiveTab) => {
    return activeTab === tab ? 'default' : 'ghost';
  }

  return (
    <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm">
      <div className="p-4 sm:p-6 lg:p-8 space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Profile Management</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
      </div>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className="flex border-b border-border">
            <Button
              variant={getVariant('profile')}
              data-state={activeTab === 'profile' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('profile')}
              className={getButtonClasses('profile')}
            >
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>
            <Button
              variant={getVariant('security')}
              data-state={activeTab === 'security' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('security')}
              className={getButtonClasses('security')}
            >
              <Shield className="mr-2 h-4 w-4" />
              Security
            </Button>
            <Button
              variant={getVariant('users')}
              data-state={activeTab === 'users' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('users')}
              className={getButtonClasses('users')}
            >
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
        </div>
      </div>
    </div>
  );
}
