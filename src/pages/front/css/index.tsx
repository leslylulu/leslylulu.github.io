import { useState } from 'react';
import FlexDemo from './flex/index';
import Flex1Demo from './flex1/index';

import { Routes, Link, Route } from "react-router-dom";



import './index.less';


const CSSDemo = () => {
  const leftTitle = [
    { name: 'flex', key: 'flex' },
    { name: 'flex = 1', key: 'flex1' },

  ]

  const [current, setCurrent] = useState(leftTitle[0].key);

  const handleClick = (e: string) => {
    setCurrent(e);
  };

  return (
    <div className="demo">
    
      <div className="demo-left">
        {
          leftTitle.map(item => {
            const selected = current === item.key;
            return <div className={`title-item ${selected ? 'title-item-selected' : ''}`} onClick={() => handleClick(item.key)}  key={item.key}>
              <Link to={item.key}>
                <span>{item.name}</span>
              </Link>
            </div>
          })
        }
      </div>
      <div className="demo-right">
        <Routes>
          <Route path="/flex" element={<FlexDemo />} />
          <Route path="/flex1" element={<Flex1Demo />} />
        </Routes>
      </div>
    </div>
  )

}

export default CSSDemo;