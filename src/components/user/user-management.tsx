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
import { Search, Filter, UserPlus, Phone, Trash2, Mail } from 'lucide-react';
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
    <Card className="bg-secondary/30 transition-all hover:bg-secondary/50 hover:shadow-md">
      <CardContent className="p-3 flex items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person face" />
          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 items-center gap-x-4 gap-y-1">
          <p className="font-semibold text-sm text-foreground">{user.name}</p>
          <div className='flex items-center gap-1.5'>
            <Mail className="h-3 w-3 text-muted-foreground" />
            <a href={`mailto:${user.email}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {user.email}
            </a>
          </div>
          <div className='flex items-center gap-1.5'>
            <Phone className="h-3 w-3 text-muted-foreground" />
            <a href={`tel:${user.phone}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">
              {user.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            className={cn(
              'text-[10px] capitalize px-2 py-0.5',
              user.status === 'active'
                ? 'border-green-500/50 bg-green-900/50 text-green-400'
                : 'border-transparent bg-muted text-muted-foreground'
            )}
            variant="outline"
          >
            {user.status}
          </Badge>
          <Badge variant="outline" className="text-[10px] capitalize px-2 py-0.5">
            {user.role}
          </Badge>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-destructive/10 hover:text-destructive h-8 w-8">
            <Trash2 className="h-4 w-4" />
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
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(user => {
      if (filter === 'all') return true;
      if (filter === 'active') return user.status === 'active';
      if (filter === 'inactive') return user.status === 'inactive';
      if (filter === 'admin') return user.role === 'admin';
      return true;
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold">User Management</h2>
          <p className="text-sm text-muted-foreground">Manage users and their permissions</p>
        </div>
         <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-grow sm:flex-grow-0 sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or email..."
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
      </div>

      <div className="space-y-3">
        {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
            <UserRow key={user.id} user={user} />
            ))
        ) : (
            <div className="text-center py-12 text-muted-foreground">
                <p>No users found matching your criteria.</p>
            </div>
        )}
      </div>
    </div>
  );
}
