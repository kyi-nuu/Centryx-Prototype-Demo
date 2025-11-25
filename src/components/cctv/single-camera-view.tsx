
'use client';

import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, VideoOff } from 'lucide-react';
import type { Camera } from '@/app/cctv/page';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

type SingleCameraViewProps = {
  camera: Camera;
  onClose: () => void;
};

export function SingleCameraView({ camera, onClose }: SingleCameraViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(true);

  useEffect(() => {
    let stream: MediaStream;
    const getCameraPermission = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasCameraPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
      }
    };

    getCameraPermission();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <video ref={videoRef} className="w-full h-full object-contain" autoPlay muted playsInline />
      <div className="absolute inset-0 bg-black/30" />
      
       {!hasCameraPermission && (
          <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/70">
            <Alert variant="destructive" className="max-w-sm text-center">
                <VideoOff className="h-5 w-5" />
                <AlertTitle>Camera Access Required</AlertTitle>
                <AlertDescription>
                Please allow camera access to use this feature.
                </AlertDescription>
            </Alert>
          </div>
      )}

      <Badge
        variant="secondary"
        className="absolute top-4 left-4 bg-black/50 text-white border-transparent text-sm px-3 py-1"
      >
        {camera.name}
      </Badge>

      <Button
        variant="secondary"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/80 text-white"
      >
        <X className="h-5 w-5" />
        <span className="sr-only">Close full screen view</span>
      </Button>
    </div>
  );
}
