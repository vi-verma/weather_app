import { Menu } from 'antd';
import React from 'react';
import styles from '../layout.module.css';

const NavigationBar = ({items,onClick,current}) => {
  return (
    <Menu
        className={styles.topMenu}
        onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
        // style={{ background: "blue", textAlign: "end" }}
    />
  )
}

export default NavigationBar;
