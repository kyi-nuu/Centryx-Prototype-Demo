'use client';

import { Home, Lightbulb, Video, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React from 'react';
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
    <aside className="flex flex-col items-center justify-between py-4 px-2 bg-card border-r">
       <Logo isCollapsed />
       <motion.div
        onMouseMove={(e) => mouseY.set(e.clientY)}
        onMouseLeave={() => mouseY.set(Infinity)}
        className="flex flex-col items-center gap-2 rounded-full px-2 py-3"
       >
        <TooltipProvider>
          {navItems.map((item, i) => {
             const isActive = pathname.startsWith(item.href);
            return(
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link href={item.href}>
                  <motion.div
                    className={cn(
                        'relative flex h-12 w-12 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary',
                        isActive && 'bg-primary/10 text-primary'
                    )}
                  >
                    <AppIcon mouseY={mouseY} icon={<item.icon className="h-6 w-6" />} />
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
      <div />
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
    let ref = React.useRef<HTMLDivElement>(null);
  
    let distance = useMotionValue(Infinity);
  
    React.useEffect(() => {
      if (!ref.current) return;
  
      let unSub = mouseY.on('change', (val) => {
        if (ref.current) {
            let rect = ref.current.getBoundingClientRect();
            distance.set(val - rect.top - rect.height / 2);
        }
      });
  
      return unSub;
    }, [mouseY, distance]);
  
    let scale = useMotionValue(1);
  
    React.useEffect(() => {
      let unSub = distance.on('change', (val) => {
        let newScale = 1 - Math.abs(val) / 100;
        scale.set(Math.max(0.5, newScale));
      });
  
      return unSub;
    }, [distance, scale]);
  
    return (
      <motion.div
        ref={ref}
        style={{ scale }}
        className="flex items-center justify-center"
      >
        {icon}
      </motion.div>
    );
  }
