import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import OndernemerList from "../components/OndernemerList";
import FacturenTable from "../components/FacturenTable";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Ondernemer",
    children: <OndernemerList />,
  },
  {
    key: "2",
    label: "Inschrijvingen",
    children: <FacturenTable />,
  },
];

const Ondernemers: React.FC = () => (
  <>
    <Tabs defaultActiveKey="1" items={items} />
  </>
);

export default Ondernemers;
