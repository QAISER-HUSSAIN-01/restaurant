import React from "react";
import { Card, Tabs } from "antd";
import Branch from "./Branch";
import Department from "./Department";
import Category from "./Category";
import Subcategory from "./Subcategory";
import Item from "./Item";
export default function Setup() {
  return (
    <Card>
      <Tabs
        defaultActiveKey="1"
        size="middle"
        items={[
          {
            label: "Add Branch",
            key: "1",
            children: <Branch />,
          },
          {
            label: "Add Department",
            key: "2",
            children: <Department />,
          },
          {
            label: "Add Category",
            key: "3",
            children: <Category />,
          },
          {
            label: "Add SubCategory",
            key: "4",
            children: <Subcategory />,
          },
          {
            label: "Add Item",
            key: "5",
            children: <Item />,
          },
        ]}
      />
    </Card>
  );
}
