import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2.5 text-2xl font-bold tracking-tight text-foreground', className)}>
      <div className="rounded-lg bg-primary p-1.5 text-primary-foreground">
        <LogoIcon className="h-6 w-6" />
      </div>
      <span className="font-headline">Centryx Vision</span>
    </div>
  );
}
