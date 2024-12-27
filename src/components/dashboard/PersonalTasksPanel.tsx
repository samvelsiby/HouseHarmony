import React from "react";
import TaskCard from "./TaskCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PersonalTask {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
  assignee: {
    name: string;
    avatar: string;
  };
  photoRequired: boolean;
}

interface PersonalTasksPanelProps {
  tasks?: PersonalTask[];
  onUploadPhoto?: (taskId: string) => void;
}

const PersonalTasksPanel = ({
  tasks = [
    {
      id: "1",
      title: "Clean Bathroom",
      description: "Deep clean the shared bathroom including shower and toilet",
      dueDate: "2024-02-21",
      status: "pending",
      assignee: {
        name: "You",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      },
      photoRequired: true,
    },
    {
      id: "2",
      title: "Take Out Trash",
      description: "Empty all trash bins and replace bags",
      dueDate: "2024-02-20",
      status: "in-progress",
      assignee: {
        name: "You",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      },
      photoRequired: true,
    },
    {
      id: "3",
      title: "Water Plants",
      description: "Water all indoor plants according to schedule",
      dueDate: "2024-02-22",
      status: "completed",
      assignee: {
        name: "You",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      },
      photoRequired: false,
    },
  ],
  onUploadPhoto = (taskId: string) =>
    console.log(`Upload photo for task ${taskId}`),
}: PersonalTasksPanelProps) => {
  return (
    <div className="w-[480px] h-[910px] bg-gray-50 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">My Tasks</h2>
        <p className="text-sm text-gray-500 mt-1">
          Tasks assigned to you in the house
        </p>
      </div>

      <ScrollArea className="h-[800px] pr-4">
        <div className="space-y-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              status={task.status}
              assignee={task.assignee}
              photoRequired={task.photoRequired}
              onUploadPhoto={() => onUploadPhoto(task.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default PersonalTasksPanel;
