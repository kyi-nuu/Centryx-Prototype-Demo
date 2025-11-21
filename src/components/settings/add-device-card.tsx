
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
import { Lightbulb, Video, PlusCircle, KeyRound, Hash } from 'lucide-react';
import { Combobox } from '@/components/ui/combobox';
import { AnimatePresence, motion } from 'framer-motion';

const cctvBrands = [
  { value: 'hikvision', label: 'Hikvision' },
  { value: 'dahua', label: 'Dahua' },
];

const lightBrands = [
  { value: 'philips-hue', label: 'Philips Hue' },
  { value: 'lifx', label: 'LIFX' },
  { value: 'wyze', label: 'Wyze' },
  { value: 'sengled', label: 'Sengled' },
];

const modelsByBrand: Record<string, { value: string; label: string }[]> = {
  dahua: [
    { value: 'ipc-hfw2431s', label: 'IPC-HFW2431S' },
    { value: 'dh-ipc-hfw4831e', label: 'DH-IPC-HFW4831E' },
    { value: 'ipc-hdbw2831r-zs', label: 'IPC-HDBW2831R-ZS' },
    { value: 'ipc-hfw5831e-ze', label: 'IPC-HFW5831E-ZE' },
  ],
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
  const [modelValue, setModelValue] = useState('');

  const brands = deviceType === 'cctv' ? cctvBrands : lightBrands;
  const models = selectedBrand ? modelsByBrand[selectedBrand] || [] : [];
  
  const showAuthFields = deviceType === 'cctv' && selectedBrand && modelValue;

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    setModelValue('');
  };

  const handleDeviceTypeChange = (type: 'cctv' | 'light') => {
    setDeviceType(type);
    setSelectedBrand(null);
    setModelValue('');
  };

  const renderModelInput = () => {
    if (deviceType === 'light') {
       return (
        <Select disabled={!selectedBrand} onValueChange={setModelValue} value={modelValue}>
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
      );
    }

    if (selectedBrand === 'hikvision') {
      return <Input placeholder="Enter model" className="bg-background h-11" value={modelValue} onChange={(e) => setModelValue(e.target.value)} />;
    }

    if (selectedBrand === 'dahua') {
      return (
        <Combobox
          options={models}
          placeholder="Search model..."
          emptyMessage="No models found."
          value={modelValue}
          onChange={setModelValue}
        />
      );
    }
    
    return (
       <Input placeholder="Choose brand first" className="bg-background h-11" disabled />
    )
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
        <CardContent className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Name" className="bg-background h-11 md:col-span-1" />
            <Input placeholder="Location" className="bg-background h-11 md:col-span-1" />
            <Select onValueChange={handleBrandChange}>
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
            {renderModelInput()}
          </div>
           <AnimatePresence>
            {showAuthFields && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
                    {selectedBrand === 'hikvision' && (
                    <>
                        <Input placeholder="Serial Number" className="bg-background h-11" />
                        <Input placeholder="Verify Code" className="bg-background h-11" />
                    </>
                    )}
                    {selectedBrand === 'dahua' && (
                    <>
                        <Input placeholder="Serial Number" className="bg-background h-11" />
                        <Input type="password" placeholder="Password" className="bg-background h-11" />
                    </>
                    )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
           <div className="flex justify-end pt-4">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Device
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
