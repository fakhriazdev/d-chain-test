import React, { useEffect, useState } from "react";

const Badge = (props) => {
    const { variant, children } = props;
    const [type, setType] = useState("");

    useEffect(() => {
        switch (variant.toLowerCase()) {
            case "pending":
                setType("yellow");
                break;
            case "rejected":
                setType("red");
                break;
            case "outstanding":
                setType("red");
                break;
            case "in partner":
                setType("green");
                break;
            case "completed":
                setType("green");
                break;
            default:
                setType("yellow");
        }
    }, []);

    return (
        <span
            className={`bg-${type}/20 text-${type} text-xs font-medium me-2 px-3 py-0.5 rounded rounded-md border-${type} border-2`}
        >
      {children}
    </span>
    );
};

export default Badge;