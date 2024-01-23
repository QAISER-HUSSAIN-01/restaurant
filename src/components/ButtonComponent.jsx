import React from "react";
import { Button, Tooltip } from "antd";
export default function ButtonComponent({
  tooltip,
  type,
  shape,
  size,
  loading,
  disabled,
  icon,
  text,
  onClick,
}) {
  return (
    <Tooltip title={tooltip}>
      <Button
        type={type || "primary"}
        size={size}
        loading={loading}
        icon={icon}
        disabled={disabled}
        shape={shape}
        onClick={onClick}
        title={text}
      />
    </Tooltip>
  );
}
