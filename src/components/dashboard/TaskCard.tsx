import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Upload } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
  assignee?: {
    name: string;
    avatar: string;
  };
  photoRequired?: boolean;
  onUploadPhoto?: () => void;
}

const TaskCard = ({
  title = "Clean Kitchen",
  description = "Deep clean all kitchen surfaces and organize pantry",
  dueDate = "2024-02-20",
  status = "pending",
  assignee = {
    name: "Alex",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  },
  photoRequired = true,
  onUploadPhoto = () => console.log("Upload photo clicked"),
}: TaskCardProps) => {
  const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    "in-progress": "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };

  return (
    <Card className="w-[448px] bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
          <Badge className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Due: {new Date(dueDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>
              {new Date(dueDate).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={assignee.avatar} alt={assignee.name} />
            <AvatarFallback>{assignee.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-gray-600">{assignee.name}</span>
        </div>
        {photoRequired && (
          <Button
            variant="outline"
            size="sm"
            onClick={onUploadPhoto}
            className="flex items-center gap-2"
          >
            <Upload className="h-4 w-4" />
            Upload Photo
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
