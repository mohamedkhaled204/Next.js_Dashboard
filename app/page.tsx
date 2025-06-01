
import { AddAreaChart } from "@/components/ui/AddAreaChart";
import AddBarChart from "@/components/ui/AddBarChart";
import { ChartPieDonutText } from "@/components/ui/AddPieChart";
import CardList from "@/components/ui/CardList";
import TodoList from "@/components/ui/TodoList";
import React from "react";

export default function page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AddBarChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="popularUsers" /></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><ChartPieDonutText/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><TodoList /></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"><AddAreaChart /></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="latestUsers" /></div>
    </div>
  );
}
