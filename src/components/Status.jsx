import React, { useEffect, useState } from "react";

const Status = (props) => {
  const { variant, children } = props;
  const [type, setType] = useState("");

  useEffect(() => {
    switch (variant) {
      case "pending":
        setType("amber-400");
        break;
      case "rejected":
        setType("red");
        break;
      case "success":
        setType("green");
        break;
        case "approve":
        setType("blue");
        break;
      default:
        // setType("amber-400");
    }
  }, []);
  return (
    <span
      className={`bg-blue-100 text-${type} text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border bg-${type} bg-opacity-20`}
    >
      {children}
    </span>
  );
};

export default Status;
