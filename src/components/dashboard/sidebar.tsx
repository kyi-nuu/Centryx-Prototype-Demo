'use client';

import { Home, Lightbulb, Video, Settings } from 'lucide-react';
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
import React, { useRef, forwardRef } from 'react';
import { Logo } from '../logo';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'Home' },
  { href: '/lights', icon: Lightbulb, label: 'Lights' },
  { href: '/cctv', icon: Video, label: 'CCTV' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  let mouseY = useMotionValue(Infinity);

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex items-center">
      <motion.div
        onMouseMove={(e) => mouseY.set(e.clientY)}
        onMouseLeave={() => mouseY.set(Infinity)}
        className="flex flex-col items-center gap-2 rounded-full bg-card border mx-4 px-2 py-4"
      >
        <TooltipProvider>
          <div className="pb-2">
            <Logo isCollapsed />
          </div>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                    <AppIcon
                      href={item.href}
                      mouseY={mouseY}
                      isActive={isActive}
                      icon={<item.icon className="h-8 w-8" />}
                    />
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
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
};

const AppIcon = forwardRef<HTMLAnchorElement, AppIconProps>(({
  mouseY,
  isActive,
  icon,
  href,
  ...props
}, forwardedRef) => {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect();
    return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link href={href} ref={forwardedRef} {...props}>
      <motion.div
        className={cn(
          'relative flex h-20 w-20 items-center justify-center rounded-full text-muted-foreground transition-colors'
        )}
      >
        <motion.div
          ref={ref}
          style={{ width }}
          className={cn(
            "aspect-square w-16 rounded-full flex items-center justify-center transition-colors",
            isActive
              ? 'bg-primary/10 text-primary'
              : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
          )}
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
});

AppIcon.displayName = 'AppIcon';
