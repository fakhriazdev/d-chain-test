import React, {useEffect, useState} from 'react';

const Button = (props) => {
    const {variant,children} = props
    const [type, setType] = useState("")

    useEffect(() => {
        switch (variant) {
            case "reject":
                setType("red")
                break;
            case "accept":
                setType("green")
                break;
            default:
                setType("yellow")

        }
    }, []);
    return (
        <button type="button" className={`text-white bg-${type} hover:bg-${type}/80 border border-gray-200 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center me-2 mb-2`}>
            {children}
        </button>
    );
};

export default Button;