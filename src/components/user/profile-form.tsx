
'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, Loader2, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

type ProfileData = {
  displayName: string;
  email: string;
  username: string;
  phone: string;
  avatarUrl: string;
};

const initialProfile: ProfileData = {
  displayName: 'John Doe',
  email: 'john.doe@centryx.com',
  username: 'johndoe',
  phone: '+1 (555) 123-4567',
  avatarUrl: 'https://picsum.photos/seed/user-profile/300/300',
};

export function ProfileForm() {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [savedProfile, setSavedProfile] = useState<ProfileData>(initialProfile);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProfile(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSavedProfile(profile);
      setIsLoading(false);
      toast({
        title: 'Profile Updated',
        description: 'Your profile information has been successfully saved.',
      });
    }, 1500);
  };

  const handleCancel = () => {
    setProfile(savedProfile);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatarUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border-0 shadow-none">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Update your public profile information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={profile.displayName}
                onChange={handleInputChange}
                className="bg-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={handleInputChange}
                className="bg-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username *</Label>
              <Input
                id="username"
                value={profile.username}
                onChange={handleInputChange}
                className="bg-input"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={profile.phone}
                onChange={handleInputChange}
                className="bg-input"
              />
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center justify-start md:pt-8">
            <Label>Profile Picture</Label>
            <div className="relative">
              <Avatar className="h-40 w-40">
                <AvatarImage src={profile.avatarUrl} alt="User avatar" data-ai-hint="person face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                variant="default"
                className="absolute bottom-2 right-2 rounded-full h-8 w-8"
                onClick={() => fileInputRef.current?.click()}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/png, image/jpeg, image/gif"
              />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                JPG, PNG or GIF. Max size 2MB
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-start gap-2 mt-8">
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Save Changes
          </Button>
          <Button variant="outline" onClick={handleCancel} disabled={isLoading}>
            Cancel
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
