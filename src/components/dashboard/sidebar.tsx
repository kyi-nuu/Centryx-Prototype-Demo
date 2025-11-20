'use client';

import { Home, Lightbulb, Video, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/lights', icon: Lightbulb, label: 'Lights' },
  { href: '/cctv', icon: Video, label: 'CCTV' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center p-4">
      <div className="flex items-end h-16 justify-center gap-2 rounded-full border bg-card/80 px-4 py-3 backdrop-blur-sm">
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.2, y: -8 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      'relative flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary',
                      pathname.startsWith(item.href) &&
                        'bg-primary/10 text-primary'
                    )}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </nav>
  );
}
