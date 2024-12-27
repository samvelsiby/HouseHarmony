import React from "react";
import DashboardHeader from "./dashboard/DashboardHeader";
import TasksPanel from "./dashboard/TasksPanel";
import PersonalTasksPanel from "./dashboard/PersonalTasksPanel";
import ActivityFeedPanel from "./dashboard/ActivityFeedPanel";

interface HomeProps {
  houseName?: string;
  members?: Array<{
    id: string;
    name: string;
    avatar: string;
  }>;
  tasks?: Array<{
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
  }>;
  personalTasks?: Array<{
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
  }>;
  activities?: Array<{
    taskTitle: string;
    memberName: string;
    memberAvatar: string;
    timestamp: string;
    verificationPhotoUrl: string;
    isCompleted: boolean;
  }>;
}

const Home = ({
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
  tasks,
  personalTasks,
  activities,
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader
        houseName={houseName}
        members={members}
        onSettingsClick={() => console.log("Settings clicked")}
        onNotificationsClick={() => console.log("Notifications clicked")}
        onLogout={() => console.log("Logout clicked")}
      />

      <main className="p-6">
        <div className="flex gap-6 justify-center">
          <TasksPanel
            tasks={tasks}
            onUploadPhoto={(taskId) =>
              console.log(`Upload photo for task ${taskId}`)
            }
          />

          <PersonalTasksPanel
            tasks={personalTasks}
            onUploadPhoto={(taskId) =>
              console.log(`Upload photo for task ${taskId}`)
            }
          />

          <ActivityFeedPanel
            activities={activities}
            onRefresh={() => console.log("Refresh clicked")}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
