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
  onClick
}) {
  return (
    <Button
      type={type || "primary"}
      size={size}
      loading={loading}
      icon={icon}
      disabled={disabled}
      shape={shape}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
