import React from "react";
import { TeamOutlined, BankOutlined, EuroOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type Props = {
  menuItem: string;
  setMenuItem: (item: string) => void;
};

const items: MenuProps["items"] = [
  {
    label: "Markten",
    key: "markten",
    icon: <BankOutlined />,
  },
  {
    label: "Ondernemers",
    key: "ondernemers",
    icon: <TeamOutlined />,
  },
  {
    label: "Facturen",
    key: "facturen",
    icon: <EuroOutlined />,
  },
];

const NavBar: React.FC<Props> = ({ menuItem, setMenuItem }) => {
  const onClick: MenuProps["onClick"] = (e) => {
    setMenuItem(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={[menuItem]}
      mode="inline"
      items={items}
      style={{ height: "100%" }}
    />
  );
};

export default NavBar;
