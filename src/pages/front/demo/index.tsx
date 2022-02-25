import { useState } from 'react';
import UseMemoHook from './usememo/index';
import { Link } from "react-router-dom";

import './index.less';

import { Routes, Route } from "react-router-dom";

const Demo = () => {
  const leftTitle = [
    { name: 'useMemo', key: 'useMemo' },
    { name: 'useCallBack', key: 'useCallBack' },
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
          <Route path="/usememo" element={<UseMemoHook />} />
        </Routes>
      </div>
    </div>
  )

}

export default Demo;