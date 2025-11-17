
import { SettingsHeader } from '@/components/settings/settings-header';
import { DeviceList } from '@/components/settings/device-list';

const camerasData = [
    { name: "Main Entrance", location: "Front Door", isRecording: true, status: 'online', model: 'Hikvision P3225-LVE' },
    { name: "Parking Lot A", location: "East Wing", isRecording: true, status: 'online', model: 'Dahua IPC-HFW2431S' },
    { name: "Lobby Area", location: "Ground Floor", isRecording: false, status: 'offline', model: 'Hikvision DS-2CD2143G0-I' },
    { name: "Hallway Section 3", location: "Floor 2", isRecording: true, status: 'online', model: 'Axis M1065-L' },
    { name: "Rooftop East", location: "Building A", isRecording: false, status: 'offline', model: 'Bosch Flexidome 5000i' },
    { name: "Loading Bay", location: "Service Area", isRecording: true, status: 'online', model: 'Hanwha QNO-8080R' },
    { name: "Server Room", location: "Basement", isRecording: true, status: 'online', model: 'Avigilon H5A' },
    { name: "Staff Canteen", location: "Floor 1", isRecording: false, status: 'offline', model: 'Mobotix M26' },
    { name: "Meeting Room 5", location: "Floor 3", isRecording: true, status: 'online', model: 'Vivotek IB9367-H' },
    { name: "West Corridor", location: "Floor 2", isRecording: true, status: 'online', model: 'Panasonic WV-S2531LN' },
    { name: "Garage Level 2", location: "Parking Structure", isRecording: true, status: 'online', model: 'Sony SNC-VB770' },
    { name: "Library", location: "Community Hall", isRecording: false, status: 'offline', model: 'IDIS DC-D4213WRX' },
    { name: "Main Auditorium", location: "Main Hall", isRecording: true, status: 'online', model: 'Canon VB-H45' },
    { name: "Gymnasium", location: "Sports Complex", isRecording: true, status: 'online', model: 'i-PRO WV-X8570N' },
    { name: "IT Department", location: "Floor 4", isRecording: false, status: 'offline', model: 'Arecont Vision Contera' },
    { name: "Reception", location: "Ground Floor", isRecording: true, status: 'online', model: 'Dahua IPC-HDW5442TM-AS' },
    { name: "Archive Room", location: "Basement", isRecording: true, status: 'online', model: 'Hikvision DS-2CD2T87G2-L' },
    { name: "Data Center", location: "Floor 5", isRecording: true, status: 'online', model: 'Axis Q1615-LE Mk III' },
    { name: "Back Entrance", location: "Rear Side", isRecording: false, status: 'offline', model: 'Vivotek FD9387-HTV' },
    { name: "Finance Office", location: "Floor 4", isRecording: true, status: 'online', model: 'Bosch Dinion 7000' },
];

const lightsData = [
  { name: "Living Room", room: "Room 1", model: "Philips Hue A19" },
  { name: "Kitchen", room: "Room 2", model: "LIFX Mini White" },
  { name: "Bedroom 1", room: "Room 3", model: "GE C-Sleep" },
  { name: "Bedroom 2", room: "Room 4", model: "Philips Hue A19" },
  { name: "Hallway", room: "Room 5", model: "Sengled Smart LED" },
  { name: "Bathroom", room: "Room 6", model: "Wyze Bulb Color" },
  { name: "Main Entrance", room: "Room 7", model: "Cree Connected Max" },
  { name: "Parking Lot", room: "CCTV 8", model: "Philips Hue BR30" },
  { name: "Office", room: "Room 9", model: "Nanoleaf Essentials" },
  { name: "Dining Room", room: "Room 10", model: "LIFX A19" },
  { name: "Garage", room: "CCTV 11", model: "GE C-Life" },
  { name: "Basement", room: "Room 12", model: "Philips Hue Go" },
  { name: "Guest Room", room: "Room 13", model: "Kasa Smart Bulb" },
  { name: "Patio", room: "CCTV 14", model: "Ring Smart Lighting" },
  { name: "Study", room: "Room 15", model: "Sylvania Smart+" },
  { name: "Laundry Room", room: "Room 16", model: "LIFX BR30" },
  { name: "Stairs", room: "Room 17", model: "Philips Hue White Ambiance" },
  { name: "Backyard", room: "CCTV 18", model: "Eufy Lumos" },
  { name: "Balcony", room: "Room 19", model: "LIFX Z-Strip" },
  { name: "Rooftop", room: "CCTV 20", model: "Govee Smart Bulbs" },
];

export default function SettingsPage() {
  return (
    <div className="flex flex-col h-full">
        <div className="sticky top-0 z-10">
            <SettingsHeader />
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <DeviceList 
                    title="CCTV"
                    searchPlaceholder="Search camera by name"
                    items={camerasData.map(camera => ({
                        id: camera.name,
                        icon: 'cctv',
                        name: camera.name,
                        description: camera.location,
                        details: camera.model,
                    }))}
                />
                 <DeviceList 
                    title="Lights"
                    searchPlaceholder="Search light by name"
                    items={lightsData.map(light => ({
                        id: light.name,
                        icon: 'light',
                        name: light.name,
                        description: light.room,
                        details: light.model,
                    }))}
                />
            </div>
        </div>
    </div>
  );
}
