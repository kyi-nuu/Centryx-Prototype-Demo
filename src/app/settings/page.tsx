import { SettingsHeader } from '@/components/settings/settings-header';
import { DeviceList } from '@/components/settings/device-list';
import { AddDeviceForm } from '@/components/settings/add-device-form';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const camerasData = [
    { name: "Main Entrance", location: "Front Door", model: 'Hikvision P3225-LVE' },
    { name: "Parking Lot A", location: "East Wing", model: 'Dahua IPC-HFW2431S' },
    { name: "Lobby Area", location: "Ground Floor", model: 'Hikvision DS-2CD2143G0-I' },
    { name: "Hallway Section 3", location: "Floor 2", model: 'Axis M1065-L' },
    { name: "Rooftop East", location: "Building A", model: 'Bosch Flexidome 5000i' },
    { name: "Loading Bay", location: "Service Area", model: 'Hanwha QNO-8080R' },
    { name: "Server Room", location: "Basement", model: 'Avigilon H5A' },
    { name: "Staff Canteen", location: "Floor 1", model: 'Mobotix M26' },
    { name: "Meeting Room 5", location: "Floor 3", model: 'Vivotek IB9367-H' },
    { name: "West Corridor", location: "Floor 2", model: 'Panasonic WV-S2531LN' },
    { name: "Garage Level 2", location: "Parking Structure", model: 'Sony SNC-VB770' },
    { name: "Library", location: "Community Hall", model: 'IDIS DC-D4213WRX' },
    { name: "Main Auditorium", location: "Main Hall", model: 'Canon VB-H45' },
    { name: "Gymnasium", location: "Sports Complex", model: 'i-PRO WV-X8570N' },
    { name: "IT Department", location: "Floor 4", model: 'Arecont Vision Contera' },
    { name: "Reception", location: "Ground Floor", model: 'Dahua IPC-HDW5442TM-AS' },
    { name: "Archive Room", location: "Basement", model: 'Hikvision DS-2CD2T87G2-L' },
    { name: "Data Center", location: "Floor 5", model: 'Axis Q1615-LE Mk III' },
    { name: "Back Entrance", location: "Rear Side", model: 'Vivotek FD9387-HTV' },
    { name: "Finance Office", location: "Floor 4", model: 'Bosch Dinion 7000' },
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
      <SettingsHeader />
      <div className="flex-1 p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start overflow-hidden">
        <div className="flex flex-col gap-4 h-full">
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
            layout="list"
          />
          <Button size="lg" className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Camera
          </Button>
        </div>
        <div className="flex flex-col gap-4 h-full">
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
            layout="grid"
          />
          <Button size="lg" variant="secondary" className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Light
          </Button>
        </div>
      </div>
      <div className="p-4 sm:p-6 lg:p-8 pt-0">
        <AddDeviceForm />
      </div>
    </div>
  );
}
