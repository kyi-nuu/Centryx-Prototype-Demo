
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2, Search, Video, Lightbulb } from 'lucide-react';
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
};

function DeviceListItem({ item, onDelete }: DeviceListItemProps) {
    const isLight = item.icon === 'light';
    const IconComponent = isLight ? Lightbulb : Video;
  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-secondary/50 transition-colors">
      <div className={cn(
          "rounded-lg p-2 mr-4", 
          isLight ? "bg-yellow-400/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"
        )}>
        <IconComponent className="h-5 w-5" />
      </div>
      <div className="flex-grow">
        <p className="font-semibold text-foreground">{item.name}</p>
        <p className="text-sm text-muted-foreground">{item.description}</p>
      </div>
      <div className="text-right mr-4 hidden sm:block">
        <p className="text-sm font-medium text-foreground">{item.details.split(' ')[0]}</p>
        <p className="text-xs text-muted-foreground">{item.details.split(' ').slice(1).join(' ')}</p>
      </div>
      <Button variant="ghost" size="icon" onClick={() => onDelete(item.id)} className="text-muted-foreground hover:text-destructive hover:bg-destructive/10">
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}


type DeviceListProps = {
  title: string;
  searchPlaceholder: string;
  items: DeviceItem[];
};

export function DeviceList({ title, searchPlaceholder, items: initialItems }: DeviceListProps) {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder={searchPlaceholder} 
                className="pl-10 bg-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-2 pt-0">
        <ScrollArea className="flex-1" style={{height: '500px'}}>
            <div className="space-y-1 pr-2">
                {filteredItems.map(item => (
                    <DeviceListItem key={item.id} item={item} onDelete={handleDelete} />
                ))}
            </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
