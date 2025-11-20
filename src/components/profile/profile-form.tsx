'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, Upload } from 'lucide-react';

export function ProfileForm() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground">
          Profile Information
        </h2>
        <p className="text-muted-foreground">
          Update your public profile information
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              id="displayName"
              defaultValue="John Doe"
              className="bg-input h-11"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              defaultValue="john.doe@centryx.com"
              className="bg-input h-11"
            />
          </div>
          <div>
            <Label htmlFor="username">Username *</Label>
            <Input
              id="username"
              defaultValue="johndoe"
              className="bg-input h-11"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="bg-input h-11"
            />
          </div>
          <div className="flex gap-4 pt-4">
            <Button size="lg">Save Changes</Button>
            <Button size="lg" variant="secondary">
              Cancel
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <Label>Profile Picture</Label>
          <p className="text-sm text-muted-foreground">JPG, PNG or GIF. Max size 2MB</p>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="h-40 w-40">
                <AvatarImage src="https://picsum.photos/seed/profile-pic/200" alt="Profile picture"/>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                variant="default"
                size="icon"
                className="absolute bottom-2 right-2 h-10 w-10 rounded-full"
              >
                <Camera className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="outline" className="w-full h-11">
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
