import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import DropdownComponent from "components/DropdownComponent";
import { confirm } from "components/Modals";
import { Link, useNavigate } from "react-router-dom";
import { removeLocalItem } from "utils/functions";
export default function Header({ handleSidebar }) {
  const navigate = useNavigate();
  const logout = () => {
    removeLocalItem("token");
    navigate("/login");
  }
  const items = [
    { key: "1", label: "...menu" },
    { key: "2", label: <Link to={"setting"}>Setting</Link> },
    { key: "3", label: <Link to={"changepassword"}>Change Password</Link> },
    {
      key: "4",
      label: (
        <Link
          onClick={() => confirm("Are you sure you want to logout?", logout)}
        >
          Sign Out
        </Link>
      ),
    },
  ];

  return (
    // h-30 line-h-3
    <Layout.Header className="header"> 
      <Row justify={"space-between"}>
        <Col span={1} className="column">
          <MenuOutlined onClick={handleSidebar} className="header-icon" />
        </Col>
        <Col span={1} className="column">
          <DropdownComponent
            list={items}
            icon={<UserOutlined className="header-icon" />}
            // text={'Profile'}
          />
        </Col>
      </Row>
    </Layout.Header>
  );
}
