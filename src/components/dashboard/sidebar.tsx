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
  { href: '/settings', icon: Settings, label: 'Settings' },
  { href: '/profile', icon: User, label: 'Profile' },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-24 bg-card p-4 border-r items-center">
      <div className="flex h-16 items-center justify-center w-full mb-4">
        <Logo isCollapsed={false} />
      </div>
      <nav className="flex flex-col items-center gap-y-4 w-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center w-16 h-16 rounded-xl text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10',
              pathname.startsWith(item.href) && 'text-primary bg-primary/10'
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
