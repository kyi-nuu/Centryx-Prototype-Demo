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
import React, { useRef } from 'react';
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
        className="flex flex-col items-center gap-2 rounded-full bg-card border mx-2 px-2 py-3"
       >
        <TooltipProvider>
            <div className="pb-2">
                <Logo isCollapsed />
            </div>
          {navItems.map((item, i) => {
             const isActive = pathname.startsWith(item.href);
            return(
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <motion.div
                    className={cn(
                        'relative flex h-14 w-14 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary',
                        isActive && 'bg-primary/10 text-primary'
                    )}
                  >
                    <AppIcon mouseY={mouseY} icon={<item.icon className="h-7 w-7" />} />
                  </motion.div>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          )})}
        </TooltipProvider>
      </motion.div>
    </aside>
  );
}

function AppIcon({
    mouseY,
    icon,
  }: {
    mouseY: ReturnType<typeof useMotionValue>,
    icon: React.ReactNode
  }) {
    let ref = useRef<HTMLDivElement>(null);
  
    let distance = useTransform(mouseY, (val) => {
      let bounds = ref.current?.getBoundingClientRect();
      return val - (bounds?.y || 0) - (bounds?.height || 0) / 2;
    });
  
    let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  
    return (
      <motion.div
        ref={ref}
        style={{ width }}
        className="aspect-square w-10 rounded-full bg-secondary flex items-center justify-center"
      >
        {icon}
      </motion.div>
    );
  }
