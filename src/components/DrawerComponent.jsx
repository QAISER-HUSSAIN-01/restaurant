import { Drawer } from "antd";
import React from "react";

export default function DrawerComponent(props) {
  return (
      <Drawer
        title="Add"
        width={props?.width || 600}
        // size="large"
        onClose={props?.onClose}
        open={props?.open}
        extra={props?.extra}
      >
        {props?.children}
      </Drawer>
  );
}
