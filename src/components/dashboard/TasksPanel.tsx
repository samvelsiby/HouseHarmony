import React from "react";
import TaskCard from "./TaskCard";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "in-progress" | "completed";
  assignee?: {
    name: string;
    avatar: string;
  };
  photoRequired: boolean;
}

interface TasksPanelProps {
  tasks?: Task[];
  onUploadPhoto?: (taskId: string) => void;
}

const TasksPanel = ({
  tasks = [
    {
      id: "1",
      title: "Clean Kitchen",
      description: "Deep clean all kitchen surfaces and organize pantry",
      dueDate: "2024-02-20",
      status: "pending",
      assignee: {
        name: "Alex",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      photoRequired: true,
    },
    {
      id: "2",
      title: "Take Out Trash",
      description: "Empty all trash bins and replace bags",
      dueDate: "2024-02-21",
      status: "in-progress",
      assignee: {
        name: "Sarah",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      photoRequired: true,
    },
    {
      id: "3",
      title: "Vacuum Living Room",
      description: "Vacuum carpet and clean under furniture",
      dueDate: "2024-02-22",
      status: "completed",
      assignee: {
        name: "Mike",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      },
      photoRequired: true,
    },
  ],
  onUploadPhoto = (taskId: string) =>
    console.log(`Upload photo for task ${taskId}`),
}: TasksPanelProps) => {
  return (
    <Card className="w-[480px] h-[910px] bg-gray-50 p-4">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-4">Tasks Due</h2>
        <ScrollArea className="flex-1">
          <div className="space-y-4 pr-4">
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
    </Card>
  );
};

export default TasksPanel;
