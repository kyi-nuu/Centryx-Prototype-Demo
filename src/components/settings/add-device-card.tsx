
'use client';

import { useState, useMemo, useEffect } from 'react';
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
import { Lightbulb, Video, PlusCircle, Loader2 } from 'lucide-react';
import { Combobox } from '@/components/ui/combobox';
import { AnimatePresence, motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

export type Device = {
  id: string;
  icon: 'cctv' | 'light';
  name: string;
  description: string;
  details: string;
};

type AddDeviceCardProps = {
  onAddDevice: (device: Device) => void;
};

const cctvBrands = [
  { value: 'hikvision', label: 'Hikvision' },
  { value: 'dahua', label: 'Dahua' },
];

const lightBrands = [
  { value: 'lifx', label: 'LIFX' },
  { value: 'tuya', label: 'Tuya' },
];

const modelsByBrand: Record<string, { value: string; label: string }[]> = {
  dahua: [
    { value: 'ipc-hfw2431s', label: 'IPC-HFW2431S' },
    { value: 'dh-ipc-hfw4831e', label: 'DH-IPC-HFW4831E' },
    { value: 'ipc-hdbw2831r-zs', label: 'IPC-HDBW2831R-ZS' },
    { value: 'ipc-hfw5831e-ze', label: 'IPC-HFW5831E-ZE' },
  ],
  lifx: [
    { value: 'lifx-a19', label: 'LIFX A19' },
    { value: 'lifx-br30', label: 'LIFX BR30' },
  ],
  tuya: [
    { value: 'tuya-bulb-e27', label: 'Smart Bulb E27' },
    { value: 'tuya-light-strip', label: 'LED Light Strip' },
  ],
};

const devicesByModel: Record<string, { value: string; label: string }[]> = {
    'lifx-a19': [
        { value: 'A19-001', label: 'LIFX A19 Bulb #001' },
        { value: 'A19-002', label: 'LIFX A19 Bulb #002' },
    ],
    'tuya-bulb-e27': [
        { value: 'TY-E27-001', label: 'Tuya E27 Bulb #001' },
    ]
}


export function AddDeviceCard({ onAddDevice }: AddDeviceCardProps) {
  const [deviceType, setDeviceType] = useState<'cctv' | 'light'>('cctv');
  
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [modelValue, setModelValue] = useState('');
  
  // CCTV specific state
  const [serialNumber, setSerialNumber] = useState('');
  const [authCode, setAuthCode] = useState(''); // Can be verify code or password

  // Light specific state
  const [selectedDevice, setSelectedDevice] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const brands = deviceType === 'cctv' ? cctvBrands : lightBrands;
  const models = selectedBrand ? modelsByBrand[selectedBrand] || [] : [];
  const devices = modelValue ? devicesByModel[modelValue] || [] : [];

  const isCctvFormValid = useMemo(() => {
    return name && location && selectedBrand && modelValue && serialNumber && authCode;
  }, [name, location, selectedBrand, modelValue, serialNumber, authCode]);

  const isLightFormValid = useMemo(() => {
    return name && location && selectedBrand && modelValue && selectedDevice;
  }, [name, location, selectedBrand, modelValue, selectedDevice]);

  const isFormValid = deviceType === 'cctv' ? isCctvFormValid : isLightFormValid;


  const clearForm = () => {
    setName('');
    setLocation('');
    setSelectedBrand(null);
    setModelValue('');
    setSerialNumber('');
    setAuthCode('');
    setSelectedDevice('');
  }

  const handleDeviceTypeChange = (type: 'cctv' | 'light') => {
    setDeviceType(type);
    clearForm();
  };

  const handleBrandChange = (value: string) => {
    setSelectedBrand(value);
    setModelValue('');
    setSerialNumber('');
    setAuthCode('');
    setSelectedDevice('');
  };

  const handleModelChange = (value: string) => {
    setModelValue(value);
    setSelectedDevice('');
  }

  const handleAddClick = () => {
    if (!isFormValid) return;

    setIsLoading(true);

    const brandLabel = brands.find(b => b.value === selectedBrand)?.label || '';
    const modelLabel = modelValue;
    
    const newDevice: Device = {
        id: `${deviceType}-${Date.now()}`,
        icon: deviceType,
        name,
        description: location,
        details: `${brandLabel} ${modelLabel}`
    };

    setTimeout(() => {
        onAddDevice(newDevice);
        toast({
            title: 'Device Added',
            description: `${name} has been successfully added.`,
        })
        clearForm();
        setIsLoading(false);
    }, 1000);
  }

  const renderCctvAuthFields = () => {
    const show = deviceType === 'cctv' && selectedBrand && modelValue;
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
                    <Input 
                        placeholder="Serial Number" 
                        className="bg-background h-11" 
                        value={serialNumber}
                        onChange={e => setSerialNumber(e.target.value)}
                    />
                    <Input 
                        type="password" 
                        placeholder={selectedBrand === 'hikvision' ? 'Verify Code' : 'Password'} 
                        className="bg-background h-11"
                        value={authCode}
                        onChange={e => setAuthCode(e.target.value)}
                    />
                </div>
              </motion.div>
            )}
      </AnimatePresence>
    )
  }

  const renderLightExtraFields = () => {
    const showDeviceSelect = deviceType === 'light' && selectedBrand && modelValue && devices.length > 0;
    const showIdAndModel = deviceType === 'light' && selectedBrand && modelValue && selectedDevice;
    return (
         <AnimatePresence>
            {showDeviceSelect && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
                        <Select onValueChange={setSelectedDevice} value={selectedDevice}>
                          <SelectTrigger className="h-11 bg-background">
                            <SelectValue placeholder="Select device"/>
                          </SelectTrigger>
                          <SelectContent>
                            {devices.map((device) => (
                              <SelectItem key={device.value} value={device.value}>
                                {device.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                    </div>
                </motion.div>
            )}
             {showIdAndModel && (
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="overflow-hidden"
                 >
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
                        <Input
                            readOnly
                            value={`ID: ${selectedDevice}`}
                            className="bg-background/50 h-11"
                        />
                         <Input
                            readOnly
                            value={`Model: ${modelValue}`}
                            className="bg-background/50 h-11"
                        />
                    </div>
                </motion.div>
             )}
        </AnimatePresence>
    )
  }

  const renderModelInput = () => {
    if (deviceType === 'cctv') {
      if (selectedBrand === 'dahua') {
        return (
          <Combobox
            options={models}
            placeholder="Search model"
            emptyMessage="No models found."
            value={modelValue}
            onChange={handleModelChange}
          />
        );
      }
      return (
        <Input
          placeholder="Model"
          className="bg-background h-11"
          value={modelValue}
          onChange={(e) => handleModelChange(e.target.value)}
          disabled={!selectedBrand}
        />
      );
    }

    // Default for 'light'
    return (
      <Select disabled={!selectedBrand} onValueChange={handleModelChange} value={modelValue}>
        <SelectTrigger className="h-11 bg-background">
          <SelectValue placeholder={selectedBrand ? 'Select model' : 'Choose brand first'}/>
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
  };


  return (
    <div className="space-y-4">
      <Card className="bg-card/50 p-2">
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={deviceType === 'cctv' ? 'default' : 'ghost'}
            onClick={() => handleDeviceTypeChange('cctv')}
            className={cn('flex-1 justify-center', deviceType === 'cctv' && 'bg-primary text-primary-foreground')}
          >
            <Video className="mr-2 h-4 w-4" />
            Add Camera
          </Button>
          <Button
            variant={deviceType === 'light' ? 'default' : 'ghost'}
            onClick={() => handleDeviceTypeChange('light')}
            className={cn('flex-1 justify-center', deviceType === 'light' && 'bg-primary text-primary-foreground')}
          >
            <Lightbulb className="mr-2 h-4 w-4" />
            Add Light
          </Button>
        </div>
      </Card>
      <Card className="bg-card/50">
        <CardContent className="p-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Name" className="bg-background h-11" value={name} onChange={e => setName(e.target.value)} />
            <Input placeholder="Location" className="bg-background h-11" value={location} onChange={e => setLocation(e.target.value)} />
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
            {renderModelInput()}
          </div>
          {deviceType === 'cctv' ? renderCctvAuthFields() : renderLightExtraFields()}
           <div className="flex justify-end pt-4">
            <Button onClick={handleAddClick} disabled={!isFormValid || isLoading}>
              {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                  <PlusCircle className="mr-2 h-4 w-4" />
              )}
              Add Device
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
