
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Info, Expand, VideoOff } from 'lucide-react';
import { cn } from '@/lib/utils';

type CameraCardProps = {
  name: string;
  location: string;
  brand: string;
  isRecording: boolean;
  status: 'online' | 'offline';
  imageUrl: string;
};

export function CameraCard({
  name,
  location,
  brand,
  isRecording,
  status,
  imageUrl,
}: CameraCardProps) {
  const isOnline = status === 'online';

  return (
    <Card className="overflow-hidden bg-card">
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={imageUrl}
            alt={`View of ${name}`}
            fill
            className={cn(
              "object-cover transition-transform duration-300 group-hover:scale-105",
              !isOnline && "filter grayscale"
            )}
            data-ai-hint="surveillance footage"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          
          {isOnline ? (
            <>
              {isRecording && (
                <Badge variant="destructive" className="absolute top-3 left-3 h-6 gap-1.5 pl-2 pr-2.5">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>REC</span>
                </Badge>
              )}
              <Badge variant="secondary" className="absolute top-3 right-3 bg-black/50 text-white border-transparent">
                1080p
              </Badge>
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button className="h-8 w-8 rounded-md bg-black/50 text-white/80 hover:bg-black/80 hover:text-white flex items-center justify-center transition-colors">
                  <Info className="h-4 w-4" />
                </button>
                <button className="h-8 w-8 rounded-md bg-black/50 text-white/80 hover:bg-black/80 hover:text-white flex items-center justify-center transition-colors">
                  <Expand className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80">
              <VideoOff className="h-12 w-12 text-muted-foreground" />
              <p className="mt-2 text-sm font-medium text-muted-foreground">Offline</p>
            </div>
          )}
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-foreground text-sm truncate">{name}</h3>
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">{location}</p>
            <Badge variant="outline" className="text-xs">{brand}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
