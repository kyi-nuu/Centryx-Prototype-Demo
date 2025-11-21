
'use client';

import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Camera as CameraIcon, MapPin, Link as LinkIcon, BarChart } from 'lucide-react';
import type { Camera } from '@/app/cctv/page';
import { LinkedLightItem } from './linked-light-item';

type CameraInfoDialogProps = {
  camera: Camera | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CameraInfoDialog({ camera, open, onOpenChange }: CameraInfoDialogProps) {
  if (!camera) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl h-[80vh] flex flex-col p-0 gap-0">
        <div className="p-6 bg-primary/10 sticky top-0 z-10 border-b">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
                <CameraIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{camera.name}</h2>
              <p className="text-sm text-muted-foreground">
                {camera.brand} • {camera.model}
              </p>
            </div>
          </div>
          {camera.isRecording && (
            <Badge variant="destructive" className="mt-4">
              <div className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
              Recording
            </Badge>
          )}
        </div>

        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart className="h-5 w-5 text-primary" />
                  Camera Information
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-semibold">{camera.location}</p>
                  </div>
                </div>
                 <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Total Lights Linked</p>
                    <p className="font-semibold">{camera.linkedLights.length} Lights</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  Linked Lights ({camera.linkedLights.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {camera.linkedLights.length > 0 ? (
                  camera.linkedLights.map((light, index) => (
                    <LinkedLightItem key={index} light={light} />
                  ))
                ) : (
                  <p className="text-muted-foreground text-sm text-center py-4">
                    No lights are linked to this camera.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
