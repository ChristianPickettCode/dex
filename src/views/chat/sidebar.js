import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed((c) => !c);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggle}
      style={{ overflow: "scroll" }}
    >
      <div id="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ overflow: "scroll" }}
      >
        <Menu.Item key="0" icon={<HomeOutlined />} style={{ height: "40px" }}>
          Madam T's Room
        </Menu.Item>
        <Menu.Item key="10" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="20" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="30" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="40" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="50" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="60" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="70" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="80" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="90" icon={<UploadOutlined />}>
          nav 90
        </Menu.Item>
        <Menu.Item key="32" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="33" icon={<UploadOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="82" icon={<UploadOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="83" icon={<UploadOutlined />}>
          nav 83
        </Menu.Item>

        <Menu.Item key="blank" icon={<UploadOutlined />}></Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
