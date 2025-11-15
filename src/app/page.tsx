import { AuthCard } from '@/components/auth/auth-card';
import { FeaturePreview } from '@/components/feature-preview';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <FeaturePreview />
        <div className="flex items-center justify-center p-6 sm:p-12">
          <AuthCard />
        </div>
      </div>
    </div>
  );
}
