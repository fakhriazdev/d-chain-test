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

      case "invoicing":
        setType("blue");
        break;
      case "unpaid":
        setType("red");
        break;
      case "late-unpaid":
        setType("red");
        break;
      default:
        setType("yellow");
    }
  }, []);
  return (
    <span
      className={`bg-${type}/20 text-${type} text-xs font-medium me-2 px-2.5 py-0.5 rounded rounded-md border-[3px] border-${type}/40`}
    >
      {children}
    </span>
  );
};

export default Badge;
