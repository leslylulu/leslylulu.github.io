import { useState } from 'react';
// import FlexDemo from './flex/index';
import PromiseDemo from './promise/index';

import { Routes, Link, Route } from "react-router-dom";



import './index.less';


const ES6Demo = () => {
  const leftTitle = [
    { name: 'promise', key: 'promise' },
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
          <Route path="/promise" element={<PromiseDemo />} />
        </Routes>
      </div>
    </div>
  )

}

export default ES6Demo;