import AlertCard from "@/components/alert-card";
import DashboardChart from "@/components/dashboard-chart";
import QuickActionsCard from "@/components/quick-actions-card";
import { Bell, EllipsisVertical, Search } from "lucide-react";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex w-full">
      <div className="w-full flex flex-col bg-muted shadow-inner p-2 overflow-y-scroll">
        <div className="flex items-center justify-between">
          <h1 className="text-lg tracking-wide font-bold text-foreground/[.8] ">
            Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <div className="bg-background flex px-3 py-2 shadow gap-2 items-center rounded-full border">
              <span className="px-2 border-r">
                <Search size={16} className="cursor-pointer" />
              </span>
              <span className="px-2 border-r">
                <Bell size={16} className="cursor-pointer" />
              </span>
              <span>
                <EllipsisVertical size={16} className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between mt-3">
          <DashboardChart />
        </div>
        <div className="mt-4">
          <span className="font-semibold text-md inline-block pb-2 ">
            Quick Actions
          </span>
          <QuickActionsCard />
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-md inline-block pb-2 ">
              High Priority Alerts
            </span>
            <span className="text-blue-600 cursor-pointer">view all {">"}</span>
          </div>
          <div className="flex gap-2">
            <AlertCard />
          </div>
        </div>
      </div>
      <div className="w-72 py-3 border-l bg-background h-full"></div>
    </div>
  );
}
