import React, { useEffect, useState } from "react";

const Badge = (props) => {
  const { variant, children } = props;
  const [type, setType] = useState("");

  useEffect(() => {
    switch (variant) {
      case "pending":
        setType("yellow");
        break;
      case "rejected":
        setType("red");
        break;
      case "success":
        setType("green");
        break;
      default:
        setType("yellow");
    }
  }, []);
  return (
    <span
      className={`bg-blue-100 text-${type} text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border`}
    >
      {children}
    </span>
  );
};

export default Badge;
