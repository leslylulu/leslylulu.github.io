import { useState } from "react";
import JSCatalog from "./js/index";
import Demo from "./demo/index";
import CSSDemo from "./css/index";
import ES6Demo from './es6/index';
import { Routes, Link, Route } from "react-router-dom";


import "./index.less";

const Front = () => {
  const menuArray = [
    // { name: 'js', key: 'js' },
    { name: "demo", key: "demo" },
    { name: "css", key: "css" },
    { name: "es6", key: "es6" },
  ];

  const [current, setCurrent] = useState(menuArray[0].key);

  const handleClick = (e: string) => {
    setCurrent(e);
  };

  return (
    <div className="front">
      <div className="front-menu">
        {menuArray.map((item, index) => {
          const selected = current === item.key;
          return (
            <div
              className={`front-menu-item ${
                selected ? "front-menu-item-selected" : ""
              }`}
              onClick={() => handleClick(item.key)}
              key={item.key}
            >
                <Link to={item.key}>
                <span>{item.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
      <Routes>
          <Route path="js/*" element={<JSCatalog />} />
          <Route path="demo/*" element={<Demo />} />
          <Route path="css/*" element={<CSSDemo />} />
          <Route path="es6/*" element={<ES6Demo />} />
        </Routes>
    </div>
  );
};

export default Front;
