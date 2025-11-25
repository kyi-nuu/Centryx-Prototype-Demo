
'use client';

import { useState, useRef, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, VideoOff } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

type Camera = {
  name: string;
  imageUrl: string;
  status: 'online' | 'offline';
};

type LiveMonitoringViewProps = {
  cameras: Camera[];
  onClose: () => void;
};

const CAMERAS_PER_PAGE = 6;

const LiveCameraFeed = ({ camera }: { camera: Camera }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState(true);

  useEffect(() => {
    if (camera.status !== 'online') return;

    let stream: MediaStream;
    const getCameraPermission = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setHasPermission(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error(`Error accessing camera for ${camera.name}:`, error);
        setHasPermission(false);
      }
    };

    getCameraPermission();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [camera]);

  if (camera.status !== 'online') {
     return (
        <div className="flex items-center justify-center h-full bg-muted">
             {/* Empty cell */}
        </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-black">
      <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
       <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-black/50 text-white border-transparent"
        >
            {camera.name}
        </Badge>
      {!hasPermission && (
        <div className="absolute inset-0 flex items-center justify-center p-2 bg-black/80">
            <Alert variant="destructive" className="max-w-xs text-center">
                <VideoOff className="h-4 w-4" />
                <AlertTitle>Camera Error</AlertTitle>
                <AlertDescription>
                    Permission denied.
                </AlertDescription>
            </Alert>
        </div>
      )}
    </div>
  );
};


export function LiveMonitoringView({ cameras, onClose }: LiveMonitoringViewProps) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(cameras.length / CAMERAS_PER_PAGE);
  const startIndex = currentPage * CAMERAS_PER_PAGE;
  const endIndex = startIndex + CAMERAS_PER_PAGE;
  const currentCameras = cameras.slice(startIndex, endIndex);

  // Fill remaining grid slots if the last page is not full
  const displayCameras = [...currentCameras];
  while (displayCameras.length < CAMERAS_PER_PAGE) {
    displayCameras.push({ name: 'Empty', imageUrl: '', status: 'offline' });
  }


  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };


  return (
    <div className="fixed inset-0 bg-background z-50 flex flex-col">
      <div className="grid grid-cols-3 grid-rows-2 flex-1 h-full">
        {displayCameras.map((camera, index) => (
          <div key={index} className="relative group border-2 border-background bg-muted">
            <LiveCameraFeed camera={camera} />
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
         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4">
            <Button
                variant="secondary"
                size="icon"
                onClick={handlePrevPage}
                disabled={totalPages <= 1}
                className="rounded-full h-10 w-10 bg-black/50 hover:bg-black/80 text-white disabled:opacity-50"
            >
                <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-white font-medium text-sm">
                Page {currentPage + 1} of {totalPages}
            </span>
            <Button
                variant="secondary"
                size="icon"
                onClick={handleNextPage}
                disabled={totalPages <= 1}
                className="rounded-full h-10 w-10 bg-black/50 hover:bg-black/80 text-white disabled:opacity-50"
            >
                <ChevronRight className="h-5 w-5" />
            </Button>
        </div>
    </div>
  );
}
