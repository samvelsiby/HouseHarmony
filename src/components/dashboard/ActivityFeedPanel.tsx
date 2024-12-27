import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ActivityItem from "./ActivityItem";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityFeedPanelProps {
  activities?: Array<{
    taskTitle: string;
    memberName: string;
    memberAvatar: string;
    timestamp: string;
    verificationPhotoUrl: string;
    isCompleted: boolean;
  }>;
  onRefresh?: () => void;
}

const ActivityFeedPanel = ({
  activities = [
    {
      taskTitle: "Clean Kitchen",
      memberName: "Sarah Wilson",
      memberAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      timestamp: "2 hours ago",
      verificationPhotoUrl:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      isCompleted: true,
    },
    {
      taskTitle: "Take Out Trash",
      memberName: "Mike Johnson",
      memberAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      timestamp: "4 hours ago",
      verificationPhotoUrl:
        "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd",
      isCompleted: true,
    },
    {
      taskTitle: "Water Plants",
      memberName: "Emma Davis",
      memberAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      timestamp: "Yesterday",
      verificationPhotoUrl:
        "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb",
      isCompleted: true,
    },
  ],
  onRefresh = () => console.log("Refresh clicked"),
}: ActivityFeedPanelProps) => {
  return (
    <Card className="w-[480px] h-[910px] bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Activity Feed</h2>
          <p className="text-sm text-gray-500">Recent house activity</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onRefresh}
          className="hover:bg-gray-100"
        >
          <RefreshCcw className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[800px] pr-4">
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <ActivityItem
                key={index}
                taskTitle={activity.taskTitle}
                memberName={activity.memberName}
                memberAvatar={activity.memberAvatar}
                timestamp={activity.timestamp}
                verificationPhotoUrl={activity.verificationPhotoUrl}
                isCompleted={activity.isCompleted}
              />
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ActivityFeedPanel;
