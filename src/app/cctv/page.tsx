
import { CctvHeader } from "@/components/cctv/cctv-header";
import { CameraCard } from "@/components/cctv/camera-card";

const camerasData = [
  { name: "Main Entrance", location: "Front Door", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam1/600/400" },
  { name: "Parking Lot A", location: "East Wing", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam2/600/400" },
  { name: "Lobby Area", location: "Ground Floor", isRecording: false, status: 'offline', imageUrl: "https://picsum.photos/seed/cam3/600/400" },
  { name: "Hallway Section 3", location: "Floor 2", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam4/600/400" },
  { name: "Rooftop East", location: "Building A", isRecording: false, status: 'offline', imageUrl: "https://picsum.photos/seed/cam5/600/400" },
  { name: "Loading Bay", location: "Service Area", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam6/600/400" },
  { name: "Server Room", location: "Basement", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam7/600/400" },
  { name: "Staff Canteen", location: "Floor 1", isRecording: false, status: 'offline', imageUrl: "https://picsum.photos/seed/cam8/600/400" },
  { name: "Meeting Room 5", location: "Floor 3", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam9/600/400" },
  { name: "West Corridor", location: "Floor 2", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam10/600/400" },
  { name: "Garage Level 2", location: "Parking Structure", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam11/600/400" },
  { name: "Library", location: "Community Hall", isRecording: false, status: 'offline', imageUrl: "https://picsum.photos/seed/cam12/600/400" },
  { name: "Main Auditorium", location: "Main Hall", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam13/600/400" },
  { name: "Gymnasium", location: "Sports Complex", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam14/600/400" },
  { name: "IT Department", location: "Floor 4", isRecording: false, status: 'offline', imageUrl: "https://picsum.photos/seed/cam15/600/400" },
  { name: "Reception", location: "Ground Floor", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam16/600/400" },
  { name: "Archive Room", location: "Basement", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam17/600/400" },
  { name: "Data Center", location: "Floor 5", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam18/600/400" },
  { name: "Back Entrance", location: "Rear Side", isRecording: false, status: 'offline', imageUrl: "https://picsum.photos/seed/cam19/600/400" },
  { name: "Finance Office", location: "Floor 4", isRecording: true, status: 'online', imageUrl: "https://picsum.photos/seed/cam20/600/400" },
];


export default function CctvPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10">
        <CctvHeader />
      </div>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {camerasData.map((camera, index) => (
                <CameraCard
                key={index}
                name={camera.name}
                location={camera.location}
                isRecording={camera.isRecording}
                status={camera.status}
                imageUrl={camera.imageUrl}
                />
            ))}
        </div>
      </div>
    </div>
  );
}
