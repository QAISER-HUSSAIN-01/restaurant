import { Drawer } from "antd";
import React from "react";

export default function DrawerComponent(props) {
  return (
      <Drawer
        title="Add"
        width={600}
        onClose={props?.onClose}
        open={props?.open}
      >
        {props?.children}
      </Drawer>
  );
}
