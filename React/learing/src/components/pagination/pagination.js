import React from 'react';

const Pagination = () => {
    let number = 1;
    const handleBefore = () => {
        // number + 1;
    }

    const handleAfter = () => {
        // number - 1;
    }

    return (
        <div>
            <span onClick={handleBefore}>{'<'}</span>
            <span>{number}</span>
            <span onClick={handleAfter}>{'>'}</span>
        </div>
    );
};

export default Pagination;
