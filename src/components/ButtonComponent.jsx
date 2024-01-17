import React from "react";
import { Button } from "antd";
export default function ButtonComponent({
  type,
  shape,
  size,
  loading,
  disabled,
  icon,
  text,
  handleClick
}) {
  return (
    <Button
      type={type || "primary"}
      size={size}
      loading={loading}
      icon={icon}
      disabled={disabled}
      shape={shape}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
}
