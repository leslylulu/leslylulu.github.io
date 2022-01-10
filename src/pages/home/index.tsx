// import { Outlet } from "react-router-dom";
import MenuList from './list/index';
import './index.less';

const Home = () => {

  return (
    <div className='home'>
      <div className='home-title'>
        <span>👀</span>
        <span style={{ marginLeft: 20 }}>2022</span>
        {/* <Outlet /> */}
        <MenuList/>
      </div>
    </div>
  );
}

export default Home;