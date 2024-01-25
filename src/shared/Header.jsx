import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Layout, Menu, Row, Space, Switch, theme } from "antd";
import DropdownComponent from "components/DropdownComponent";
import { confirm } from "components/Modals";
import { Link, useNavigate } from "react-router-dom";
import { removeLocalItem } from "utils/functions";
import { handleTheme } from "../store/slices/theme";
import { useDispatch, useSelector } from "react-redux";

export default function Header({ handleSidebar }) {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const logout = () => {
    removeLocalItem("token");
    navigate("/login");
  };

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
    <Layout.Header className="p-0 ant-layout-sider-light">
      {/* <Menu theme="light"> */}
      <Row justify={"space-between"}>
        <Col span={1} className="text-center">
          <MenuOutlined onClick={handleSidebar} className="header-icon" />
        </Col>
        <Space className="pr-3">
          {/* <Col span={1} className="column">
            <Switch
              checkedChildren="Light"
              unCheckedChildren="Dark"
              onClick={() => {
                dispatch(handleTheme());
              }}
              defaultValue={isDark}
            />
          </Col> */}
          <Col span={1} className="text-center">
            <DropdownComponent
              list={items}
              icon={<UserOutlined className="header-icon" />}
              // text={'Profile'}
            />
          </Col>
        </Space>
      </Row>
      {/* </Menu> */}
    </Layout.Header>
  );
}
