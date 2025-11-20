'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function UserPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">User Profile</h1>
          <p className="text-muted-foreground">Manage your profile and settings</p>
        </div>
      </div>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://picsum.photos/seed/avatar/200/200" alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <CardTitle className="text-2xl">John Doe</CardTitle>
              <p className="text-muted-foreground">john.doe@example.com</p>
              <p className="text-sm text-primary font-medium pt-1">Administrator</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Account Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Username:</span>
                  <span className="font-medium">johndoe</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Last Login:</span>
                  <span className="font-medium">25 minutes ago</span>
                </div>
                 <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Member Since:</span>
                  <span className="font-medium">January 15, 2023</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
                <Button variant="outline">Change Password</Button>
                <Button>Edit Profile</Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
