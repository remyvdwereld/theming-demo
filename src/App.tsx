import { useState } from "react";
import { Switch, ConfigProvider, Layout } from "antd";
import NavBar from "./components/NavBar";
import Markten from "./pages/Markten";
import Ondernemers from "./pages/Ondernemers";
import Facturen from "./pages/Facturen";
import BreadcrumpNavigation from "./components/BreadcrumpNavigation";
import Logo from "./assets/gemeente-amsterdam.svg";
import LightTheme from "./themes/light";
import DarkTheme from "./themes/dark";

import "./App.css";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [menuItem, setMenItem] = useState("markten");
  const [darkMode, setDarkMode] = useState(false);

  const globalTheme = darkMode ? DarkTheme : LightTheme;

  return (
    <ConfigProvider theme={globalTheme}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider style={{ background: globalTheme.token.colorBgContainer }}>
          <img src={Logo} className="logo" alt="Amsterdam logo" />
          <NavBar menuItem={menuItem} setMenuItem={setMenItem} />
        </Sider>
        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <div className="header">
              <BreadcrumpNavigation />
              <div className="flex">
                <span className="margin-right-half-1">Dark mode</span>
                <Switch onChange={setDarkMode} />
              </div>
            </div>
            {menuItem === "markten" && <Markten />}
            {menuItem === "ondernemers" && <Ondernemers />}
            {menuItem === "facturen" && <Facturen />}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Reemzter ©{new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
