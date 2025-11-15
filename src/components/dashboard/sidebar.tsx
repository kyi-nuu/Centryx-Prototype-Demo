'use client';

import { Home, Lightbulb, Video, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
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
    <aside className="hidden md:flex flex-col items-center w-24 bg-card/80 backdrop-blur-sm p-4 border-r">
      <div className="flex h-16 items-center justify-center mb-4">
        <Logo isCollapsed />
      </div>
      <nav className="flex-1 flex flex-col items-center space-y-2">
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.href} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center justify-center w-14 h-14 rounded-xl text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary hover:bg-primary/10',
                    'group relative',
                    pathname === item.href && 'bg-primary/20 text-primary'
                  )}
                >
                  <item.icon className="h-7 w-7" />
                  {pathname === item.href && (
                     <span className="absolute -left-1.5 h-6 w-1 rounded-full bg-primary" />
                  )}
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
      <Separator className="my-4" />
      <nav className="flex flex-col items-center space-y-2">
        <TooltipProvider>
          {secondaryNavItems.map((item) => (
            <Tooltip key={item.href} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center justify-center w-14 h-14 rounded-xl text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary hover:bg-primary/10',
                    'group relative',
                    pathname === item.href && 'bg-primary/20 text-primary'
                  )}
                >
                  <item.icon className="h-7 w-7" />
                   {pathname === item.href && (
                     <span className="absolute -left-1.5 h-6 w-1 rounded-full bg-primary" />
                  )}
                </Link>
              </TooltipTrigger>
               <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
}
