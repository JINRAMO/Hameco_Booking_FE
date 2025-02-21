import React from "react";
import { Outlet } from "react-router";
import NavigationBar from "../components/NavigationBar"; // Adjust the path as necessary

const DefaultLayout: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
