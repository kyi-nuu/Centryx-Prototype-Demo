'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Lightbulb, Video } from 'lucide-react';

const cctvBrands = [
  { value: 'hikvision', label: 'Hikvision' },
  { value: 'dahua', label: 'Dahua' },
  { value: 'axis', label: 'Axis' },
  { value: 'bosch', label: 'Bosch' },
];

const lightBrands = [
  { value: 'philips-hue', label: 'Philips Hue' },
  { value: 'lifx', label: 'LIFX' },
  { value: 'wyze', label: 'Wyze' },
  { value: 'sengled', label: 'Sengled' },
];

const modelsByBrand: Record<string, { value: string; label: string }[]> = {
  hikvision: [
    { value: 'ds-2cd2143g2-i', label: 'DS-2CD2143G2-I' },
    { value: 'ds-2cd2047g2-lu', label: 'DS-2CD2047G2-LU' },
  ],
  dahua: [
    { value: 'ipc-hdw5442tm-as', label: 'IPC-HDW5442TM-AS' },
    { value: 'ipc-hfw3849t1-as-pv', label: 'IPC-HFW3849T1-AS-PV' },
  ],
  axis: [{ value: 'm3065-v', label: 'M3065-V' }],
  bosch: [{ value: 'flexidome-ip-5000', label: 'Flexidome IP 5000' }],
  'philips-hue': [
    { value: 'white-ambiance', label: 'White Ambiance' },
    { value: 'white-and-color-ambiance', label: 'White and Color Ambiance' },
  ],
  lifx: [
    { value: 'lifx-a19', label: 'LIFX A19' },
    { value: 'lifx-br30', label: 'LIFX BR30' },
  ],
  wyze: [{ value: 'wyze-bulb-color', label: 'Wyze Bulb Color' }],
  sengled: [{ value: 'element-classic', label: 'Element Classic' }],
};

export function AddDeviceCard() {
  const [deviceType, setDeviceType] = useState<'cctv' | 'light'>('cctv');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const brands = deviceType === 'cctv' ? cctvBrands : lightBrands;
  const models = selectedBrand ? modelsByBrand[selectedBrand] || [] : [];

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
  };

  const handleDeviceTypeChange = (type: 'cctv' | 'light') => {
    setDeviceType(type);
    setSelectedBrand(null); // Reset brand selection when device type changes
  };

  return (
    <div className="space-y-4">
      <Card className="bg-card/50 p-2">
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={deviceType === 'cctv' ? 'default' : 'ghost'}
            onClick={() => handleDeviceTypeChange('cctv')}
            className={cn(
              'flex-1 justify-center',
              deviceType === 'cctv' && 'bg-primary text-primary-foreground'
            )}
          >
            <Video className="mr-2 h-4 w-4" />
            Add Camera
          </Button>
          <Button
            variant={deviceType === 'light' ? 'default' : 'ghost'}
            onClick={() => handleDeviceTypeChange('light')}
            className={cn(
              'flex-1 justify-center',
              deviceType === 'light' && 'bg-primary text-primary-foreground'
            )}
          >
            <Lightbulb className="mr-2 h-4 w-4" />
            Add Light
          </Button>
        </div>
      </Card>
      <Card className="bg-card/50">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Name" className="bg-background h-11 md:col-span-1" />
            <Input placeholder="Location" className="bg-background h-11 md:col-span-1" />
            <Select onValueChange={handleBrandChange} value={selectedBrand || ''}>
              <SelectTrigger className="h-11 bg-background">
                <SelectValue placeholder="Select brand" />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand) => (
                  <SelectItem key={brand.value} value={brand.value}>
                    {brand.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select disabled={!selectedBrand}>
              <SelectTrigger className="h-11 bg-background">
                <SelectValue
                  placeholder={
                    selectedBrand ? 'Select model' : 'Choose brand first'
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {models.map((model) => (
                  <SelectItem key={model.value} value={model.value}>
                    {model.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
