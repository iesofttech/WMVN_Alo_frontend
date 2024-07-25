import React from "react";
import { Button } from "antd";

const CustomButton = ({
  text,
  type,
  onClick,
  className,
  disabled = false,
  htmlType = "",
}) => {
  return (
    <Button
      onClick={onClick}
      className={`${type} ${className}`}
      disabled={disabled}
      htmlType={htmlType}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
