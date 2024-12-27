import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, Bell, LogOut } from "lucide-react";

interface Member {
  id: string;
  name: string;
  avatar: string;
}

interface DashboardHeaderProps {
  houseName: string;
  members: Member[];
  onSettingsClick?: () => void;
  onNotificationsClick?: () => void;
  onLogout?: () => void;
}

const DashboardHeader = ({
  houseName = "The Cozy House",
  members = [
    {
      id: "1",
      name: "Alex",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      id: "2",
      name: "Sarah",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: "3",
      name: "Mike",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ],
  onSettingsClick = () => console.log("Settings clicked"),
  onNotificationsClick = () => console.log("Notifications clicked"),
  onLogout = () => console.log("Logout clicked"),
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-[72px] px-6 bg-white border-b border-gray-200 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-semibold text-gray-900">{houseName}</h1>
        <div className="flex -space-x-2">
          {members.map((member) => (
            <Avatar key={member.id} className="border-2 border-white">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onNotificationsClick}
          className="relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>House Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onSettingsClick}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
