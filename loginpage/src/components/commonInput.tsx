import React from "react";

const CommonInput = React.forwardRef(
  ({ type = "text", className = "", ...rest }: any, ref: any) => {
    return (
      <input
        ref={ref}
        type={type}
        className={className}
        {...rest}
      />
    );
  }
);

export default CommonInput;