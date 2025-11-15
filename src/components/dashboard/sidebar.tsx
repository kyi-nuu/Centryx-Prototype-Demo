'use client';

import { Home, Lightbulb, Video, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/lights', icon: Lightbulb, label: 'Lights' },
  { href: '/cctv', icon: Video, label: 'CCTV' },
];

const secondaryNavItems = [
  { href: '/settings', icon: Settings, label: 'Settings' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col items-center w-28 bg-card p-4 border-r">
      <div className="flex h-16 items-center justify-center mb-6 w-full">
        <Logo />
      </div>
      <nav className="flex-1 flex flex-col items-center space-y-6 w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center w-full h-20 rounded-xl text-muted-foreground transition-colors hover:text-primary',
              'relative group',
              pathname === item.href && 'text-primary'
            )}
          >
            {pathname === item.href && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-primary" />
            )}
            <div
              className={cn(
                'flex items-center justify-center w-14 h-14 rounded-xl transition-colors group-hover:bg-primary/10',
                pathname === item.href && 'bg-primary/10'
              )}
            >
              <item.icon className="h-6 w-6" />
            </div>
            <span className="text-xs mt-2">{item.label}</span>
          </Link>
        ))}
      </nav>
      <Separator className="my-4 bg-border/50" />
      <nav className="flex flex-col items-center space-y-6 w-full">
        {secondaryNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center w-full h-20 rounded-xl text-muted-foreground transition-colors hover:text-primary',
              'relative group',
              pathname === item.href && 'text-primary'
            )}
          >
            {pathname === item.href && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-primary" />
            )}
            <div
              className={cn(
                'flex items-center justify-center w-14 h-14 rounded-xl transition-colors group-hover:bg-primary/10',
                pathname === item.href && 'bg-primary/10'
              )}
            >
              <item.icon className="h-6 w-6" />
            </div>
            <span className="text-xs mt-2">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
