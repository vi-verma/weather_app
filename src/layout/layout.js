import { useState } from "react";
import { Menu, Button, Row, Col } from "antd";
import styles from "./layout.module.css";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

// sider menu drawer items function to map items
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const siderItems = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const Layout = ({ children }) => {
  const [current, setCurrent] = useState("mail");
  const [collapsed, setCollapsed] = useState(false);
  const [toggleFullScreen, setToggleFullScreen] = useState(true);

  const onClick = (e) => {
    setCurrent(e.key);
  };
  // toggle side menu
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // full screen
  const handleFullScreen = () => {
    setToggleFullScreen((prev) => !prev);
  };

  const items = [
    {
      label: <Link to={"/home"}>Home</Link>,
      key: "home",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to={"/information"}>Information</Link>,
      key: "information",
      icon: <MailOutlined />,
      // disabled: true,
    },
    {
      label: <Link to={"/about"}>About</Link>,
      key: "about",
      icon: <ContainerOutlined />,
    },
    {
      label: <Link to={"/weather"}>Weather</Link>,
      key: "weather",
      icon: <ContainerOutlined />,
    },

  ];
  return (
    <>
      <Row style={{display: "flex",}}>
        <Col span={21} className={styles.menuwrapper}>
          {toggleFullScreen && (
            <Menu
              className={styles.topMenu}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={items}
              // style={{ background: "blue", textAlign: "end" }}
            />
          )}
        </Col>

        {/* {!toggleFullScreen && ( */}
          <Col span={3} style={{background: toggleFullScreen ? 'rgb(241, 180, 180)': ''}}>
            <Button onClick={handleFullScreen} style={{background: 'rgb(241, 180, 180)', marginTop:'6px'}}>Exit Full Screen</Button>
          </Col>
        {/* )} */}

      </Row>
      <Row span={24}>
        {toggleFullScreen && (
          <Col>
            <div
              style={{
                width: collapsed ? 80 : 256,
                background: "#5eabab",
                height: "100vh",
                transition: "ease-in-out",
              }}
            >
              <Button
                type="text"
                onClick={toggleCollapsed}
                style={{
                  // marginBottom: 16,
                  width: "100%",
                }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                // theme="dark"
                inlineCollapsed={collapsed}
                items={siderItems}
              />
            </div>
          </Col>
        )}

        <Col style={{margin:'10px'}} span={16}>{children}</Col>
      </Row>
    </>
  );
};

export default Layout;
