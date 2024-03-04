import React from "react";
import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import { CheckCircleTwoTone, StopTwoTone } from "@ant-design/icons";

const MARKTEN = [
  {
    name: "Albert Cuypmarkt",
    color: "error",
  },
  {
    name: "Dappermarkt",
    color: "success",
  },
  {
    name: "Waterloopleinmarkt",
    color: "geekblue",
  },
  {
    name: "Noordermarkt",
    color: "warning",
  },
];

interface DataType {
  key: number;
  inschrijvingsnummer: string;
  type: string;
  subtype: string;
  markt: string;
  inschrijvingsdatum: Date;
  actief: boolean;
}

const getMarktColor = (name: string) =>
  MARKTEN.find((markt) => markt.name === name)?.color;

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Inschrijvingsnummer",
    dataIndex: "inschrijvingsnummer",
    key: "inschrijvingsnummer",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Subtype",
    dataIndex: "subtype",
    key: "subtype",
  },
  {
    title: "Markt",
    key: "markt",
    dataIndex: "markt",
    render: (text) => <Tag color={getMarktColor(text)}>{text}</Tag>,
  },
  {
    title: "Inschrijvingsdatum",
    dataIndex: "inschrijvingsdatum",
    key: "inschrijvingsdatum",
    render: (text) => text.toLocaleDateString(),
  },
  {
    title: "Actief",
    key: "actief",
    dataIndex: "actief",
    render: (actief) =>
      actief ? (
        <CheckCircleTwoTone twoToneColor="#52c41a" />
      ) : (
        <StopTwoTone twoToneColor="#ff4d4f" />
      ),
  },
];

const generateData = (): DataType[] => {
  const data: DataType[] = [];
  const types: string[] = ["Dagplaatshouder", "Vaste standplaatshouder"];
  const subtypes: string[] = ["SOLL", "VPL"];
  const markets: string[] = MARKTEN.map((markt) => markt.name);
  const currentDate = new Date();

  for (let i = 0; i < 20; i++) {
    const inschrijvingsnummer = `INS-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}`;
    const type = types[Math.floor(Math.random() * types.length)];
    const subtype = subtypes[Math.floor(Math.random() * subtypes.length)];
    const markt = markets[Math.floor(Math.random() * markets.length)];
    const actief = Math.random() < 0.5; // randomly assign true or false
    const randomYearOffset = Math.floor(Math.random() * (i + 1));
    const inschrijvingsdatum = new Date(
      currentDate.getFullYear() - randomYearOffset,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
    );

    data.push({
      key: i,
      inschrijvingsnummer,
      type,
      subtype,
      markt,
      inschrijvingsdatum,
      actief,
    });
  }

  return data;
};

const FacturenTable: React.FC = () => {
  const data = generateData();

  return <Table columns={columns} dataSource={data} />;
};

export default FacturenTable;
