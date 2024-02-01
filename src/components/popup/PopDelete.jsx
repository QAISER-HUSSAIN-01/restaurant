import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import React from "react";

export default function PopDelete(props) {
  return (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      icon={
        <QuestionCircleOutlined
          style={{
            color: "red",
          }}
        />
      }
      onConfirm={props?.handleDelete}
    >
      {props?.children}
    </Popconfirm>
  );
}
