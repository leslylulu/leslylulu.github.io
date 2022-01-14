import { Link, Routes, Route } from "react-router-dom";
import MenuList from './list/index';
import AnnualSummary from './annualsummary/index';
import Test from './test/index';

import './index.less';

const Home = () => {

  return (
    <div className='home'>
      <div className='home-title'>
  
        <Routes>
          <Route path="/" element={<MenuList />} />
          <Route path="/anan" element={<AnnualSummary />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;