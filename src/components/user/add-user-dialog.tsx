'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserPlus, Loader2 } from 'lucide-react';
import { useState } from "react";
import type { User, Role } from "./user-management";
import { useToast } from "@/hooks/use-toast";

type AddUserDialogProps = {
  onAddUser: (user: Omit<User, 'id' | 'avatarUrl' | 'status'>) => void;
}

export function AddUserDialog({ onAddUser }: AddUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState<Role>('user');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const isFormValid = name && email && phone;

  const handleSubmit = () => {
    if (!isFormValid) return;
    
    setIsLoading(true);
    setTimeout(() => {
        onAddUser({ name, email, phone, role });
        toast({
            title: "User Added",
            description: `${name} has been added to the system.`,
        });
        setIsLoading(false);
        setIsOpen(false);
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setRole('user');
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New User</DialogTitle>
          <DialogDescription>
            Create a new user account and assign their role
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" className="bg-input" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" placeholder="john.doe@centryx.com" className="bg-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
           <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-input" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={(value: Role) => setRole(value)} defaultValue={role}>
              <SelectTrigger className="bg-input">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit} disabled={!isFormValid || isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Add User
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
