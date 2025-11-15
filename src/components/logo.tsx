import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M15.5 8.5a3.5 3.5 0 1 0-7 0" />
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
    <path d="M8.5 15.5a3.5 3.5 0 1 0 7 0" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M22 12h-2" />
    <path d="M4 12H2" />
  </svg>
);

export function Logo({ className, isCollapsed }: { className?: string, isCollapsed?: boolean }) {
  return (
    <div className={cn('flex flex-col items-center gap-2 text-foreground font-bold', className)}>
      <div className="rounded-full border border-primary/50 bg-card p-1.5 text-primary shadow-sm">
        <LogoIcon className="h-5 w-5" />
      </div>
      {!isCollapsed && <span className="tracking-tight text-xs">CENTRYX</span>}
    </div>
  );
}
