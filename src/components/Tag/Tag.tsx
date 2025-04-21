import React from "react";

type TagProps = {
  label: string;
  color?: "primary" | "success" | "warning" | "error";
};

const Tag: React.FC<TagProps> = ({ label, color = "primary" }) => {
  const colorMap: Record<string, string> = {
    primary: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-400 text-black",
    error: "bg-red-500 text-white",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]}`}>
      {label}
    </span>
  );
};

export default Tag;
