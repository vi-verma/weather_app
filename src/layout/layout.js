import { useState } from "react";
import { Menu, Button, Row, Col, Breadcrumb } from "antd";
import styles from "./layout.module.css";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import BreadcrumbComponent from "../components/breadCrumb/BreadcrumbComponent";
import SideMenu from "./sideMenu/SideMenu";
import NavigationBar from "./topNavBar/NavigationBar";

const Layout = ({ children }) => {
  const [current, setCurrent] = useState("mail");
  const [menuOrientation, setMenuOrientation] = useState(true);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  // full screen
  const handleOrientationChange = () => {
    console.log("qwsdfvbnertghj");
    setMenuOrientation(prev => !prev);
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
    {
      label: <Button onClick={handleOrientationChange} type="text"> Switch Menu </Button>,
      key: "switch menu",
      icon: <ContainerOutlined />,
    },
  ];

  return (
    <>
    {
      menuOrientation ?
      <Row>
        <Col span={24} className={styles.menuwrapper}>
          <NavigationBar 
            items={items}
            onClick={onClick}
            current={current}
          />
          <BreadcrumbComponent />
          <div style={{margin: '12px'}}>
            {children}
          </div>
        </Col>
      </Row>
      :
      <Row style={{height:'100%'}}>
          <Col>
            <SideMenu 
              items={items}
              onClick={onClick}
              current
            />
          </Col>
          <Col style={{ margin: "10px", background:'grey' }} >
            <BreadcrumbComponent/>
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
              {children}
            </div>
          </Col>
      </Row>
    }
    </>
  );
};

export default Layout;
