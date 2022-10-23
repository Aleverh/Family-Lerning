import React, { forwardRef } from "react";
const Input = ({
    className,
    ...props
}, ref) => {
    const classname = `input ${className}`;

    return (
        <input {...props} className={classname} ref={ref} />
    )
}
export default forwardRef(Input);