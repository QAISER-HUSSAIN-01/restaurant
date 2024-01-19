import React, { useState } from "react";
import { Layout } from "antd";
import Sidebar from "shared/Sidebar";
import Header from "shared/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [hide, setHide] = useState(false);
  const handleSidebar = () => setHide(!hide);
  
  return (
    <Layout hasSider className="main-layout">
      <Sidebar hide={hide} setHide={setHide} />
      <Layout>
        <Header handleSidebar={handleSidebar}/>
        <Layout.Content style={{ padding: "10px", overflowY: "auto" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
