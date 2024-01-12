import React, { useEffect, useState } from "react";

const Badge = (props) => {
  const { variant, children } = props;
  const [type, setType] = useState("");

  useEffect(() => {
    switch (variant) {
      case "pending":
        setType("yellow");
        break;
      case "Pending":
        setType("yellow");
        break;
      case "rejected":
        setType("red");
        break;
      case "success":
        setType("green");
        break;
      case "Unpaid":
        setType("yellow");
        break;
      case "Late":
        setType("red");
        break;
      case "Disputed":
        setType("red");
        break;
      case "Outstanding":
        setType("red");
        break;
      case "Rejected":
        setType("red");
        break;
      case "Paid":
        setType("green");
        break;
      case "Completed":
        setType("green");
        break;
      case "Ongoing":
        setType("blue");
        break;

      case "invoicing":
        setType("blue");
        break;
      case "unpaid":
        setType("red");
        break;
      case "Lateunpaid":
        setType("red");
        break;
      default:
        setType("yellow");
    }
  }, []);
  return (
    <span
      className={`bg-${type} bg-opacity-20 text-${type} text-xs font-medium me-2 px-2.5 py-0.5 rounded-md border-[1px]`}
    >
      {children}
    </span>
  );
};

export default Badge;
