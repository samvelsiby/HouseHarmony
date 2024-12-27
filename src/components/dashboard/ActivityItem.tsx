import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card } from "../ui/card";
import { Check, Clock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ActivityItemProps {
  taskTitle: string;
  memberName: string;
  memberAvatar: string;
  timestamp: string;
  verificationPhotoUrl: string;
  isCompleted?: boolean;
}

const ActivityItem = ({
  taskTitle = "Clean Kitchen",
  memberName = "John Doe",
  memberAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  timestamp = "2 hours ago",
  verificationPhotoUrl = "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
  isCompleted = true,
}: ActivityItemProps) => {
  return (
    <Card className="p-4 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={memberAvatar} alt={memberName} />
          <AvatarFallback>
            {memberName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm">{memberName}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    {timestamp}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Activity timestamp</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <p className="text-sm text-gray-600 mt-1">{taskTitle}</p>

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isCompleted && (
                <span className="flex items-center gap-1 text-xs text-green-600">
                  <Check className="h-3 w-3" />
                  Completed
                </span>
              )}
            </div>
            {verificationPhotoUrl && (
              <img
                src={verificationPhotoUrl}
                alt="Verification"
                className="h-16 w-16 rounded-md object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActivityItem;
