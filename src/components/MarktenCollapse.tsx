import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import albertcuyp from "../assets/albertcuyp.png";
import dappermarkt from "../assets/dappermarkt.avif";
import waterloopleinmarkt from "../assets/waterloopleinmarkt.webp";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "Albert Cuypmarkt ",
    children: (
      <div>
        <img src={albertcuyp} alt="avatar" className="markt-img" />
        <p>
          De Albert Cuypstraat is een straat in de Amsterdamse wijk De Pijp in
          het stadsdeel Zuid. De straat is in 1883 vernoemd naar Albert Cuyp,
          een kunstschilder uit de 17e eeuw, loopt van de Ruysdaelkade in het
          westen naar de Van Woustraat in het oosten, en kruist de Ferdinand
          Bolstraat.
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label: "Dappermarkt",
    children: (
      <div>
        <img src={dappermarkt} alt="avatar" className="markt-img" />
        <p>
          De Dappermarkt is een markt in de Dapperstraat in Amsterdam-Oost en
          een van de drukst bezochte markten van Amsterdam. De markt wordt op de
          zondag na dagelijks gehouden en trekt veel bezoekers, ook van buiten
          de stad.
        </p>
      </div>
    ),
  },
  {
    key: "3",
    label: "Waterloopleinmarkt",
    children: (
      <div>
        <img src={waterloopleinmarkt} alt="avatar" className="markt-img" />
        <p>
          Het Waterlooplein is de oudste vlooienmarkt van Nederland.
          Honderddrieendertig jaar geleden opgericht, zes dagen per week open en
          met zo’n driehonderd kramen, een van de leukste en gezelligste plekken
          in hartje Amsterdam. U kunt ongelimiteerd struinen, kijken en wat
          leuks op de kop tikken. Van vintage fototoestellen, tot tweedehands
          boeken, tot sieraden en de laatste mode voor weinig.
        </p>
      </div>
    ),
  },
];

const MarktenCollapse: React.FC = () => (
  <Collapse items={items} defaultActiveKey={["1", "2"]} />
);

export default MarktenCollapse;
