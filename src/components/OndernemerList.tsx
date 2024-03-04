import React from "react";
import { Avatar, List, Typography } from "antd";
import marktman from "../assets/marktman.jpeg";

const { Title } = Typography;

const data = [
  {
    name: "Geboortedatum",
    value: "17-06-1975",
  },
  {
    name: "Adres",
    value: "Weesperstraat 113, 1017JS, Amsterdam",
  },
  {
    name: "Telefoonnummer",
    value: "+31 6 12 34 56 78",
  },
  {
    name: "KvK-nummer",
    value: "123456789",
  },
  {
    name: "Marktpascode",
    value: "02EC1245THS458",
  },
  {
    name: "E-mail",
    value: "henkvisboer@gmail.com",
  },
];

const OndernemerList: React.FC = () => (
  <>
    <List
      header={
        <div className="flex">
          <Avatar
            className="margin-right-half-1"
            size={64}
            src={<img src={marktman} alt="avatar" />}
          />
          <Title level={3}>Henk Visboer</Title>
        </div>
      }
      style={{ backgroundColor: "#fff" }}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={item.name} description={item.value} />
        </List.Item>
      )}
    />
  </>
);

export default OndernemerList;
