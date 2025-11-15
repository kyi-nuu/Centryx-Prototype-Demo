'use client';

import { Lightbulb, Video, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { Avatar, AvatarFallback } from '../ui/avatar';

const navItems = [
  { href: '/dashboard', icon: Lightbulb, label: 'Lights' },
  { href: '/cctv', icon: Video, label: 'CCTV' },
];

const secondaryNavItems = [
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-28 bg-card p-4 border-r justify-between">
      <div>
        <div className="flex h-16 items-center justify-center mb-6 w-full">
          <Logo isCollapsed={false} />
        </div>
        <nav className="flex flex-col items-center space-y-4 w-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center w-full py-2 rounded-xl text-muted-foreground transition-colors hover:text-primary',
                pathname === item.href && 'text-primary bg-primary/10'
              )}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-2">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <nav className="flex flex-col items-center space-y-4 w-full">
         <Separator className="my-4 bg-border/50" />
        {secondaryNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center w-full py-2 rounded-xl text-muted-foreground transition-colors hover:text-primary',
              pathname === item.href && 'text-primary bg-primary/10'
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-2">{item.label}</span>
          </Link>
        ))}
         <Link
            href="/profile"
            className={cn(
              'flex flex-col items-center justify-center w-full py-2 rounded-xl text-muted-foreground transition-colors hover:text-primary',
               pathname === '/profile' && 'text-primary'
            )}
          >
             <Avatar className="h-8 w-8">
              <AvatarFallback className={cn(pathname === '/profile' ? "bg-primary/20" : "bg-muted")}>N</AvatarFallback>
            </Avatar>
            <span className="text-xs mt-2">Profile</span>
          </Link>
      </nav>
    </aside>
  );
}
