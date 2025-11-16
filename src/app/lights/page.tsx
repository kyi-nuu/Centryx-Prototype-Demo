
import { LightsHeader } from "@/components/lights/lights-header";
import { LightCard } from "@/components/lights/light-card";

const lightsData = [
  { name: "Living Room", room: "Room 1", isOn: true, brightness: 80 },
  { name: "Kitchen", room: "Room 2", isOn: true, brightness: 60 },
  { name: "Bedroom 1", room: "Room 3", isOn: false },
  { name: "Bedroom 2", room: "Room 4", isOn: false },
  { name: "Hallway", room: "Room 5", isOn: true, brightness: 70 },
  { name: "Bathroom", room: "Room 6", isOn: false },
  { name: "Main Entrance", room: "Room 7", isOn: true, brightness: 90 },
  { name: "Parking Lot", room: "CCTV 8", isOn: true, brightness: 100 },
  { name: "Office", room: "Room 9", isOn: false },
  { name: "Dining Room", room: "Room 10", isOn: true, brightness: 75 },
  { name: "Garage", room: "CCTV 11", isOn: false },
  { name: "Basement", room: "Room 12", isOn: true, brightness: 50 },
  { name: "Guest Room", room: "Room 13", isOn: false },
  { name: "Patio", room: "CCTV 14", isOn: true, brightness: 85 },
  { name: "Study", room: "Room 15", isOn: true, brightness: 65 },
  { name: "Laundry Room", room: "Room 16", isOn: false },
  { name: "Stairs", room: "Room 17", isOn: true, brightness: 55 },
  { name: "Backyard", room: "CCTV 18", isOn: false },
  { name: "Balcony", room: "Room 19", isOn: true, brightness: 45 },
  { name: "Rooftop", room: "CCTV 20", isOn: false },
];

export default function LightsPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="sticky top-0 z-10">
        <LightsHeader />
      </div>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lightsData.map((light, index) => (
            <LightCard
              key={index}
              name={light.name}
              room={light.room}
              isOn={light.isOn}
              brightness={light.brightness}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
