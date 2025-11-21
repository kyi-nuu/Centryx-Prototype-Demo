
'use client';

import { useState, useMemo } from 'react';
import { CctvHeader } from '@/components/cctv/cctv-header';
import { CameraCard } from '@/components/cctv/camera-card';
import { RecordingsView } from '@/components/cctv/recordings-view';
import { LiveMonitoringView } from '@/components/cctv/live-monitoring-view';

const camerasData = [
  { name: 'Main Entrance', location: 'Front Door', brand: 'Hikvision', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam1/600/400' },
  { name: 'Parking Lot A', location: 'East Wing', brand: 'Dahua', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam2/600/400' },
  { name: 'Lobby Area', location: 'Ground Floor', brand: 'Axis', isRecording: false, status: 'offline', imageUrl: 'https://picsum.photos/seed/cam3/600/400' },
  { name: 'Hallway Section 3', location: 'Floor 2', brand: 'Bosch', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam4/600/400' },
  { name: 'Rooftop East', location: 'Building A', brand: 'Hikvision', isRecording: false, status: 'offline', imageUrl: 'https://picsum.photos/seed/cam5/600/400' },
  { name: 'Loading Bay', location: 'Service Area', brand: 'Dahua', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam6/600/400' },
  { name: 'Server Room', location: 'Basement', brand: 'Axis', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam7/600/400' },
  { name: 'Staff Canteen', location: 'Floor 1', brand: 'Hikvision', isRecording: false, status: 'offline', imageUrl: 'https://picsum.photos/seed/cam8/600/400' },
  { name: 'Meeting Room 5', location: 'Floor 3', brand: 'Dahua', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam9/600/400' },
  { name: 'West Corridor', location: 'Floor 2', brand: 'Axis', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam10/600/400' },
  { name: 'Garage Level 2', location: 'Parking Structure', brand: 'Bosch', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam11/600/400' },
  { name: 'Library', location: 'Community Hall', brand: 'Hikvision', isRecording: false, status: 'offline', imageUrl: 'https://picsum.photos/seed/cam12/600/400' },
  { name: 'Main Auditorium', location: 'Main Hall', brand: 'Dahua', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam13/600/400' },
  { name: 'Gymnasium', location: 'Sports Complex', brand: 'Hikvision', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam14/600/400' },
  { name: 'IT Department', location: 'Floor 4', brand: 'Dahua', isRecording: false, status: 'offline', imageUrl: 'https://picsum.photos/seed/cam15/600/400' },
  { name: 'Reception', location: 'Ground Floor', brand: 'Axis', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam16/600/400' },
  { name: 'Archive Room', location: 'Basement', brand: 'Bosch', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam17/600/400' },
  { name: 'Data Center', location: 'Floor 5', brand: 'Hikvision', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam18/600/400' },
  { name: 'Back Entrance', location: 'Rear Side', brand: 'Dahua', isRecording: false, status: 'offline', imageUrl: 'https://picsum.photos/seed/cam19/600/400' },
  { name: 'Finance Office', location: 'Floor 4', brand: 'Axis', isRecording: true, status: 'online', imageUrl: 'https://picsum.photos/seed/cam20/600/400' },
];

export type CctvView = 'grid' | 'recordings' | 'live-monitoring';
export type FilterStatus = 'all' | 'online' | 'offline';


export default function CctvPage() {
  const [view, setView] = useState<CctvView>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');


  const handleSetView = (newView: CctvView) => {
    // If we are in live-monitoring, clicking the button again should take us back to the grid.
    if (view === 'live-monitoring' && newView === 'live-monitoring') {
        setView('grid');
    } else {
        setView(newView);
    }
  }

  const onlineCameras = camerasData.filter(cam => cam.status === 'online');
  
  const filteredCameras = useMemo(() => {
    return camerasData
      .filter(camera => {
        if (filterStatus === 'all') return true;
        return camera.status === filterStatus;
      })
      .filter(camera => 
        camera.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        camera.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, filterStatus]);

  const onlineCount = useMemo(() => camerasData.filter(cam => cam.status === 'online').length, []);
  const offlineCount = useMemo(() => camerasData.filter(cam => cam.status === 'offline').length, []);

  if (view === 'live-monitoring') {
    return <LiveMonitoringView cameras={onlineCameras} onClose={() => setView('grid')} />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10">
        <CctvHeader 
          activeView={view} 
          onSetView={handleSetView}
          onSearchChange={setSearchTerm}
          onFilterChange={setFilterStatus}
          onlineCount={onlineCount}
          offlineCount={offlineCount}
        />
      </div>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {view === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCameras.map((camera, index) => (
              <CameraCard
                key={index}
                name={camera.name}
                location={camera.location}
                brand={camera.brand}
                isRecording={camera.isRecording}
                status={camera.status}
                imageUrl={camera.imageUrl}
              />
            ))}
          </div>
        ) : (
          <RecordingsView />
        )}
      </div>
    </div>
  );
}
