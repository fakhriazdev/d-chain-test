import React, { useEffect, useState } from 'react';

const Button = (props) => {
    const { variant, children } = props;
    const [type, setType] = useState("");

    useEffect(() => {
        switch (variant) {
            case "b-reject":
                setType("red");
                break;
            case "b-accept":
                setType("green");
                break;
            default:
                setType("yellow");
                // Consider logging an error for unknown variants
                break;
        }
    }, [variant,children]);

    return (
        <button
            type="button"
            className={`text-white bg-${type} border border-gray-200 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2 mb-2`}
        >
            {children}
        </button>
    );
};

export default Button;
