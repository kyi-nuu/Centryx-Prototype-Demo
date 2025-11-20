'use client';

import { Home, Lightbulb, Settings, Video } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React, { useRef } from 'react';
import { Logo } from '../logo';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/lights', icon: Lightbulb, label: 'Lights' },
  { href: '/cctv', icon: Video, label: 'CCTV' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function DashboardSidebar() {
  const mouseY = useMotionValue(Infinity);

  return (
    <aside className="fixed inset-y-0 left-4 z-50 flex items-center">
      <motion.div
        onMouseMove={(e) => mouseY.set(e.clientY)}
        onMouseLeave={() => mouseY.set(Infinity)}
        className="flex flex-col items-center gap-4 rounded-full bg-card border px-2 py-6"
      >
        <TooltipProvider>
          <div className="pb-4">
            <Logo isCollapsed />
          </div>
          {navItems.map((item) => (
            <AppIcon
              key={item.href}
              href={item.href}
              mouseY={mouseY}
              isActive={usePathname() === item.href}
              icon={<item.icon className="h-6 w-6" />}
              label={item.label}
            />
          ))}
        </TooltipProvider>
      </motion.div>
    </aside>
  );
}

type AppIconProps = {
  mouseY: ReturnType<typeof useMotionValue>;
  isActive: boolean;
  icon: React.ReactNode;
  href: string;
  label: string;
};

const AppIcon = ({ mouseY, isActive, icon, href, label }: AppIconProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect();
    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  const scale = useSpring(useTransform(distance, [-150, 0, 150], [1, 1.5, 1]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            'aspect-square rounded-full flex items-center justify-center transition-colors w-12 h-12',
            isActive
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-muted-foreground hover:bg-primary/80 hover:text-primary-foreground'
          )}
        >
          <motion.div style={{ scale }}>{icon}</motion.div>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

AppIcon.displayName = 'AppIcon';
