import { Avatar, Col, Layout, Menu, Row, Typography } from "antd";
import React from "react";

const { Header } = Layout;
const { Text } = Typography;

const HeaderBar = () => {
  const nameText = "<Rajendra Garade />";
  return (
    <Header
      style={{ position: "fixed", zIndex: 1, width: "100%", padding: "0 40px" }}
    >
      <Row align="middle" justify="space-between">
        <Col>
          <Row align="middle" gutter={12}>
            <Col>
              <Avatar size={40} src="/profile.jpg" />
            </Col>
            <Col>
              <Text
                style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
              >
                {nameText}
              </Text>
            </Col>
          </Row>
        </Col>

        {/* Right Side: Menu */}
        <Col flex="auto">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ justifyContent: "flex-end", display: "flex" }}
          >
            <Menu.Item key="1">
              <a href="#about">About</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="#skills">Skills</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="#experience">Experience</a>
            </Menu.Item>
            <Menu.Item key="4">
              <a href="#education">Education</a>
            </Menu.Item>
            <Menu.Item key="5">
              <a href="#certificates">Certificates</a>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderBar;
