import React from "react";
import Sidebar from "./Sidebar";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const items = ["Dashboard", "Profile", "Settings", "Logout"];

export const Default = () => <Sidebar items={items} />;
