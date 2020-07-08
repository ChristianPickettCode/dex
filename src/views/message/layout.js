import React from "react";

import { Layout, Input, Comment, List } from "antd";
import data from "./data";

const { Content } = Layout;
const { TextArea } = Input;

const layout = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 280,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={data}
          style={{
            overflow: "scroll",
            scrollbarColor: "green",
            display: "flex",
            flexDirection: "column-reverse",
            marginBottom: "20px",
          }}
          renderItem={(item) => (
            <li>
              <Comment
                style={{ textAlign: "left" }}
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        />
        <TextArea
          rows={1}
          style={{ marginTop: "auto", borderColor: "#40a9ff" }}
        />
      </Content>
    </Layout>
  );
};

export default layout;
