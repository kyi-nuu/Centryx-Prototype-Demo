
'use client';

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type Camera = {
  name: string;
  imageUrl: string;
  status: 'online' | 'offline';
};

type LiveMonitoringViewProps = {
  cameras: Camera[];
  onClose: () => void;
};

const liveCameras = [
  { name: 'Main Entrance', imageUrl: 'https://picsum.photos/seed/live1/800/600', status: 'online' },
  { name: 'Parking Lot A', imageUrl: 'https://picsum.photos/seed/live2/800/600', status: 'online' },
  { name: 'Lobby Area', imageUrl: 'https://picsum.photos/seed/live3/800/600', status: 'online' },
  { name: 'Hallway 1st Floor', imageUrl: 'https://picsum.photos/seed/live4/800/600', status: 'online' },
  { name: 'Back Entrance', imageUrl: 'https://picsum.photos/seed/live5/800/600', status: 'online' },
  { name: 'Storage Area', imageUrl: 'https://picsum.photos/seed/live6/800/600', status: 'online' },
];

export function LiveMonitoringView({ onClose }: LiveMonitoringViewProps) {
  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <div className="grid grid-cols-3 grid-rows-2 flex-1 h-full">
        {liveCameras.map((camera, index) => (
          <div key={index} className="relative group border-2 border-background">
            <Image
              src={camera.imageUrl}
              alt={`Live feed from ${camera.name}`}
              fill
              className="object-cover"
              data-ai-hint="surveillance footage"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <Badge
              variant="secondary"
              className="absolute top-3 left-3 bg-black/50 text-white border-transparent"
            >
              {camera.name}
            </Badge>
          </div>
        ))}
      </div>
       <Button
          variant="secondary"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/80 text-white"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close live monitoring</span>
        </Button>
    </div>
  );
}
