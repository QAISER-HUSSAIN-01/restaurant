import React from "react";
import { sidebarList } from "../utils/dummy";
import { Col, Divider, Layout, Menu, Row, Space, Typography } from "antd";
import { AlibabaOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import logo from "assets/imgs/logo.jpg";
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
      <Col className={`flex justify-center align-center ${hide ? 'p-2' : 'p-2'} logo-container`}>
        <Row gutter={[20, 0]}>
          <Col className="logo">
            <img src={logo} alt="logo" />
          </Col>
          {!hide && (
            <Col className="flex flex-column">
              <Typography.Text className="bold mb-0">
                Qaiser Hussain
              </Typography.Text>
              <Typography.Text>Software Engineer</Typography.Text>
            </Col>
          )}
        </Row>
      </Col>
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
