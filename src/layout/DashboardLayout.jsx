import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "components/shared/Sidebar";
import Header from "components/shared/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [hide, setHide] = useState(false);
  const handleSidebar = () => setHide(!hide);
  
  return (
    <Layout hasSider className="main-layout">
      <Sidebar hide={hide} setHide={setHide} />
      <Layout>
        <Header handleSidebar={handleSidebar} />
        <Layout.Content className="content">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
