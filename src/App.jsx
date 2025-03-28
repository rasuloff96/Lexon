import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {
  BookOutlined,
  CommentOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider } = Layout;

import Content from "./components/Content.jsx"
// import HomePage from "./pages/HomePage.jsx"
// import LawsPage from "./pages/LawsPage.jsx"
// import FaqPage from "./pages/FaqPage.jsx"


const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Bosh sahifa',
            },
            {
              key: '2',
              icon: <BookOutlined />,
              label: 'Kodekslar',
            },
            {
              key: '3',
              icon: <CommentOutlined />,
              label: 'Savol-Javoblar',
            },
            {
              key: "4",
              icon: <SettingOutlined />,
              label: "Sozlamalar"
            },
            {
              key: "5",
              icon: <UserOutlined />,
              label: "Profile"
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content />
      </Layout>
    </Layout>
  );
};
export default App;