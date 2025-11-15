'use client';

import { Home, Lightbulb, Video, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/lights', icon: Lightbulb, label: 'Lights' },
  { href: '/cctv', icon: Video, label: 'CCTV' },
];

const secondaryNavItems = [
    { href: '/settings', icon: Settings, label: 'Settings' },
    { href: '/profile', icon: User, label: 'Profile' },
]

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-20 bg-card p-2 border-r items-center justify-between">
      <div className="flex flex-col items-center gap-y-4 w-full">
        <div className="flex h-16 items-center justify-center w-full mb-2">
            <Logo isCollapsed={true} />
        </div>
        <nav className="flex flex-col items-center gap-y-2 w-full">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center w-14 h-14 rounded-xl text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10',
                pathname.startsWith(item.href) && 'text-primary bg-primary/10'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
       <nav className="flex flex-col items-center gap-y-2 w-full">
          {secondaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center w-14 h-14 rounded-xl text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10',
                pathname.startsWith(item.href) && 'text-primary bg-primary/10'
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] mt-1">{item.label}</span>
            </Link>
          ))}
        </nav>
    </aside>
  );
}
