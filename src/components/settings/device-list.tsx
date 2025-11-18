'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Video, Lightbulb, ArrowRight, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

type DeviceItem = {
  id: string;
  icon: 'cctv' | 'light';
  name: string;
  description: string;
  details: string;
};

type DeviceListItemProps = {
  item: DeviceItem;
  onDelete: (id: string) => void;
  layout: 'list' | 'grid';
};

function DeviceListItem({ item, onDelete, layout }: DeviceListItemProps) {
  const isLight = item.icon === 'light';
  const IconComponent = isLight ? Lightbulb : Video;
  return (
    <div
      className={cn(
        'flex items-center p-3 rounded-lg hover:bg-secondary/50 transition-colors group',
        layout === 'grid' && 'bg-card border p-4'
      )}
    >
      <div className={cn('flex items-center gap-4 flex-1 w-full')}>
        <div
          className={cn(
            'rounded-lg p-2',
            isLight
              ? 'bg-yellow-400/20 text-yellow-400'
              : 'bg-blue-500/20 text-blue-500'
          )}
        >
          <IconComponent className="h-5 w-5" />
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-foreground text-sm">{item.name}</p>
          <p className="text-xs text-muted-foreground">{item.description}</p>
        </div>
        {layout === 'grid' && (
           <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(item.id)}
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-6 w-6"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
      {layout === 'list' && (
        <div className='text-right shrink-0 ml-4'>
          <p className="text-xs font-medium text-foreground">{item.details.split(' ')[0]}</p>
          <p className="text-[10px] text-muted-foreground">
            {item.details.split(' ').slice(1).join(' ')}
          </p>
        </div>
      )}
       {layout === 'list' && (
            <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(item.id)}
                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 ml-2 shrink-0 h-8 w-8"
            >
                <Trash2 className="h-4 w-4" />
            </Button>
       )}
    </div>
  );
}

type DeviceListProps = {
  title: string;
  searchPlaceholder: string;
  items: DeviceItem[];
  layout?: 'list' | 'grid';
};

export function DeviceList({
  title,
  searchPlaceholder,
  items: initialItems,
  layout = 'list',
}: DeviceListProps) {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="flex flex-col h-full bg-card/50">
      <CardHeader className="flex-shrink-0">
        <CardTitle>{title}</CardTitle>
        <div className="relative mt-2">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            className="bg-background h-11 pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-2 pt-0 overflow-hidden">
        <ScrollArea className="h-full">
            <div
            className={cn(
                'p-0 pr-2',
                layout === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 gap-2 p-2'
                : 'space-y-1'
            )}
            >
            {filteredItems.map((item) => (
                <DeviceListItem
                key={item.id}
                item={item}
                onDelete={handleDelete}
                layout={layout}
                />
            ))}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
