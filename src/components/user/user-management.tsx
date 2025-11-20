'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Badge } from '@/components/ui/badge';
import { Search, Filter, UserPlus, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl: string;
  status: 'active' | 'inactive';
  role: 'admin' | 'user';
};

const usersData: User[] = [
  { id: 'usr1', name: 'John Doe', email: 'john.doe@centryx.com', phone: '+1 (555) 123-4567', avatarUrl: 'https://picsum.photos/seed/user1/100/100', status: 'active', role: 'admin' },
  { id: 'usr2', name: 'Jane Smith', email: 'jane.smith@centryx.com', phone: '+1 (555) 234-5678', avatarUrl: 'https://picsum.photos/seed/user2/100/100', status: 'active', role: 'admin' },
  { id: 'usr3', name: 'Mike Johnson', email: 'mike.johnson@centryx.com', phone: '+1 (555) 345-6789', avatarUrl: 'https://picsum.photos/seed/user3/100/100', status: 'active', role: 'user' },
  { id: 'usr4', name: 'Sarah Williams', email: 'sarah.williams@centryx.com', phone: '+1 (555) 456-7890', avatarUrl: 'https://picsum.photos/seed/user4/100/100', status: 'inactive', role: 'user' },
  { id: 'usr5', name: 'David Brown', email: 'david.brown@centryx.com', phone: '+1 (555) 567-8901', avatarUrl: 'https://picsum.photos/seed/user5/100/100', status: 'active', role: 'user' },
];

function UserRow({ user }: { user: User }) {
  return (
    <Card className="bg-secondary/30">
      <CardContent className="p-3 grid grid-cols-1 md:grid-cols-10 items-center gap-4">
        <div className="md:col-span-3 flex items-center gap-4">
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person face" />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-muted-foreground">Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="font-semibold">{user.email}</p>
        </div>
        <div className="md:col-span-2">
          <p className="text-sm text-muted-foreground">Phone</p>
          <p className="font-semibold flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {user.phone}
          </p>
        </div>
        <div className="md:col-span-2 flex items-center justify-end gap-2">
          <Badge className={cn('text-xs', user.status === 'active' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-muted text-muted-foreground border-transparent')}>
            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </Badge>
          <Button variant="destructive" size="sm" className="text-xs h-8">
            Remove
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredUsers = usersData
    .filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(user => {
      if (filter === 'all') return true;
      if (filter === 'active') return user.status === 'active';
      if (filter === 'inactive') return user.status === 'inactive';
      if (filter === 'admin') return user.role === 'admin';
      return true;
    });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">User Management</h2>
        <p className="text-muted-foreground">Manage users and their permissions</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-grow sm:flex-grow-0 sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by email..."
            className="pl-10 bg-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px] bg-input">
              <SelectValue placeholder="All Users" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Users</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
              <SelectItem value="admin">Admins</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-grow" />
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="space-y-4">
        {filteredUsers.map(user => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
