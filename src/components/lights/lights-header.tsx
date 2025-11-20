'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Filter, Sun, Moon, Zap } from 'lucide-react';
import { PowerOffIcon } from '../icons/power-off-icon';

const modeCards = [
  {
    label: 'Day Mode',
    icon: Sun,
    color: 'bg-blue-200/50 dark:bg-blue-900/30 border-blue-300/50 dark:border-blue-700/50 text-blue-500 dark:text-blue-400',
  },
  {
    label: 'Night Mode',
    icon: Moon,
    color: 'bg-purple-200/50 dark:bg-purple-900/30 border-purple-300/50 dark:border-purple-700/50 text-purple-500 dark:text-purple-400',
  },
  {
    label: 'Eco Mode',
    icon: Zap,
    color: 'bg-green-200/50 dark:bg-green-900/30 border-green-300/50 dark:border-green-700/50 text-green-500 dark:text-green-400',
  },
  {
    label: 'All Off',
    icon: PowerOffIcon,
    color: 'bg-red-200/50 dark:bg-red-900/30 border-red-300/50 dark:border-red-700/50 text-red-500 dark:text-red-400',
  },
];

export function LightsHeader() {
  return (
    <Card className="rounded-none border-x-0 border-t-0 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Lighting Control</h1>
          <p className="text-muted-foreground">Manage all smart lights in your building</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search light by name" className="pl-10 bg-input" />
          </div>
          <div className="flex-grow" />
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="hidden sm:flex">Turn all on</Button>
            <Button variant="ghost" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Tabs defaultValue="all" className="hidden sm:block">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="on">On (14)</TabsTrigger>
                <TabsTrigger value="off">Off (10)</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {modeCards.map((card) => (
            <Card key={card.label} className={card.color}>
              <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                <card.icon className="h-6 w-6" />
                <span className="text-sm font-medium">{card.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
