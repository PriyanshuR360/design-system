import React from "react";

type SidebarProps = {
  items: string[];
};

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Navigation</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="py-2 px-3 rounded hover:bg-gray-700 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
