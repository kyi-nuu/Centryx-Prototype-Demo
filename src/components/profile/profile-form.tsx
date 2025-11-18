'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, Upload } from 'lucide-react';

export function ProfileForm() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Profile Information</h2>
          <p className="text-muted-foreground">Update your public profile information</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="displayName">Display Name</Label>
              <Input id="displayName" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" defaultValue="john.doe@centryx.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username *</Label>
              <Input id="username" defaultValue="johndoe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
          <div className="space-y-4 flex flex-col items-center">
            <Label>Profile Picture</Label>
            <div className="relative">
              <Avatar className="h-40 w-40">
                <AvatarImage src="https://picsum.photos/seed/profile-avatar/200" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="secondary" className="absolute bottom-2 right-2 rounded-full h-10 w-10 border-2 border-card">
                <Camera className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">JPG, PNG or GIF. Max size 2MB</p>
            <Button variant="outline" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </div>
        </div>
        <div className="mt-8 flex justify-end gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  );
}
