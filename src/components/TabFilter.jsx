import React, { useState } from 'react';

const TabFilter = (props) => {
    const { filter1, filter2,width = "400", onFilterClick} = props;
    const [activeFilter, setActiveFilter] = useState(filter1);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        onFilterClick(filter);
    };

    return (
        <div className={`w-[${width}px] h-[58px] bg-lightgray/20 border-2 border-lightgray rounded-lg flex p-1 gap-2`}>
            <button
                className={`${
                    activeFilter === filter1
                        ? 'bg-orange text-white'
                        : 'bg-transparent text-orange'
                } w-full rounded-lg transition-all duration-500 ease-in-out px-3 py-2`}
                onClick={() => handleFilterClick(filter1)}
            >
                {filter1}
            </button>
            <button
                className={`${
                    activeFilter === filter2
                        ? 'bg-orange text-white'
                        : 'bg-transparent text-orange'
                } w-full rounded-lg transition-all duration-500 ease-in-out px-3 py-2`}
                onClick={() => handleFilterClick(filter2)}
            >
                {filter2}
            </button>
        </div>
    );
};

export default TabFilter;
