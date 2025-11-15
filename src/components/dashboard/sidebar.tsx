'use client';

import { Home, Lightbulb, Video, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/cctv', icon: Video, label: 'CCTV' },
  { href: '/lights', icon: Lightbulb, label: 'Lights' },
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
              'flex items-center justify-center w-16 h-16 rounded-xl text-muted-foreground transition-colors hover:text-primary hover:bg-primary/10 relative group',
              pathname.startsWith(item.href) && 'text-primary bg-primary/10'
            )}
          >
            <item.icon className="h-8 w-8" />
            <span className="absolute left-full ml-4 px-2 py-1 bg-card border rounded-md text-sm text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
             {pathname.startsWith(item.href) && (
              <div className="absolute -left-4 h-8 w-1 bg-primary rounded-r-full" />
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
