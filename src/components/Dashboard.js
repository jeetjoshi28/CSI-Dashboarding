import React from "react";
import TableComponent from "./Table";
import ChartComponent from "./Chart";
import CalendarComponent from "./Calendar";
import KanbanComponent from "./Kanban";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <TableComponent />
      <ChartComponent />
      <CalendarComponent />
      <KanbanComponent />
    </div>
  );
};

export default Dashboard;
