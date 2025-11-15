import { AuthCard } from '@/components/auth/auth-card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-background p-6 sm:p-12">
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      <AuthCard />
    </div>
  );
}
