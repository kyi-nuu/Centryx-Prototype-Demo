'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, Upload } from 'lucide-react';

export function ProfileForm() {
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
              <Input id="displayName" defaultValue="John Doe" className="bg-input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" defaultValue="john.doe@centryx.com" className="bg-input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username *</Label>
              <Input id="username" defaultValue="johndoe" className="bg-input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="bg-input" />
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center justify-start md:pt-8">
            <Label>Profile Picture</Label>
            <div className="relative">
              <Avatar className="h-40 w-40">
                <AvatarImage src="https://picsum.photos/seed/user-profile/300/300" alt="User avatar" data-ai-hint="person face" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="default" className="absolute bottom-2 right-2 rounded-full h-8 w-8">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center">
              <Button variant="outline" className="w-full">
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
          <Button>Save Changes</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  );
}
