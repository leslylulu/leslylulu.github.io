import { Routes, Route } from "react-router-dom";
import ThreeList from './list/index';
import LineDemo from './line/index';
import ThreeScene from './demo/index';
import './index.less';

const ThreeDemo = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<ThreeList />} />
        <Route path="/demo" element={<ThreeScene />} />
        <Route path="/line" element={<LineDemo />} />
      </Routes>
    </div>
  );
}

export default ThreeDemo;