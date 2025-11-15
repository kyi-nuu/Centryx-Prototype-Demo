import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back,</p>
        <h1 className="text-2xl font-bold text-foreground">John Doe</h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src="https://picsum.photos/seed/100/100/100" alt="@johndoe" />
            <AvatarFallback>JD</AvatarFallback>
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></div>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">John Doe</p>
            <Badge variant="outline" className="border-primary text-primary">Administrator</Badge>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
