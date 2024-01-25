import React from "react";
import { sidebarList } from "../utils/dummy";
import { Col, Divider, Layout, Menu, Row, Space, Typography } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
export default function Sidebar({ hide, setHide }) {
  const location = useLocation();
  return (
    <Layout.Sider
      className="sidebar"
      collapsed={hide}
      breakpoint="sm"
      onBreakpoint={(param) => setHide(param)}
      theme="light"
    >
      {/* <Col className="logo-container bg-color">
        <Row>
          <AlibabaOutlined className="logo h-100p" />
          <Col className="bg-color">
            <Typography.Text>Qaiser Hussain</Typography.Text>
            <Typography.Text>Software Engineer</Typography.Text>
          </Col>
        </Row>
      </Col> */}
      {/* <Divider /> */}
      <Menu
        theme="light"
        items={sidebarList || []}
        className="menu"
        // defaultOpenKeys={['/inventory/grn']}
        selectedKeys={[location.pathname]}
      />
    </Layout.Sider>
  );
}
