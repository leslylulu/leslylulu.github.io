import { useState } from 'react';
import MemoDemo from './memo/index';
import UseMemoDemo from './useMemoDemo/index';
import UseCallBackDemo from './useCallBackDemo/index';
import UseRefDemo from './useRefDemo/index';
import { Link } from "react-router-dom";

import './index.less';

import { Routes, Route } from "react-router-dom";

const Demo = () => {
  const leftTitle = [
    { name: 'memo', key: 'memo' },
    { name: 'useMemo', key: 'useMemo' },
    { name: 'useCallBack', key: 'useCallBack' },
    { name: 'useRef', key: 'useRef' },
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
          <Route path="/memo" element={<MemoDemo />} />
          <Route path="/useMemo" element={<UseMemoDemo />} />
          <Route path="/useCallBack" element={<UseCallBackDemo />} />
          <Route path="/useRef" element={<UseRefDemo />} />
        </Routes>
      </div>
    </div>
  )

}

export default Demo;