import React from "react";

import { Layout } from "antd";

import "./Main.css";

import Room from "../room/sidebar";
import Chat from "../chat/sidebar";
import Message from "../message/layout";

const Main = () => {
  return (
    <Layout className="main" style={{ position: "absolute" }}>
      <Room />
      <Chat />
      <Message />
    </Layout>
  );
};

export default Main;
