import React from "react";
import { sidebarList } from "../utils/dummy";
import { Col, Divider, Layout, Menu } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
export default function Sidebar({ hide, setHide }) {
  const location = useLocation();
  return (
    <Layout.Sider
      className="sidebar p-2"
      theme="light"
      collapsed={hide}
      breakpoint="sm"
      onBreakpoint={(param) => setHide(param)}
    >
      <Col className="logo-container">
        <AlibabaOutlined className="logo" />
        
      </Col>
      <Divider />
      <Menu
        theme="light"
        items={sidebarList || []}
        className="menu"
        // defaultOpenKeys={['/dashboard']}
        selectedKeys={[location.pathname]}
      />
    </Layout.Sider>
  );
}
