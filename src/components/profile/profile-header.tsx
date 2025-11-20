'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProfileTab } from '@/app/profile/page';

type ProfileHeaderProps = {
  activeTab: ProfileTab;
  setActiveTab: (tab: ProfileTab) => void;
};

const tabs: { id: ProfileTab; label: string; icon: React.ElementType }[] = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'users', label: 'Users', icon: Users },
];

export function ProfileHeader({ activeTab, setActiveTab }: ProfileHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-muted/80 backdrop-blur-sm">
      <Card className="rounded-none border-x-0 border-t-0 bg-transparent">
        <CardContent className="p-4 sm:p-6 lg:p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Profile Management</h1>
            <p className="text-muted-foreground">Manage your account settings and preferences</p>
          </div>
          <div className="flex items-center gap-4 border-b border-border pb-px">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? 'default' : 'ghost'}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'gap-2 rounded-none border-b-2 border-transparent px-4 pb-3 pt-2 font-semibold',
                  'transition-none',
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                  'bg-transparent hover:bg-transparent'
                )}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </header>
  );
}
