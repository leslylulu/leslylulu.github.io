import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { isMobile } from '../../util/index';
import './index.less';

const Index = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, [])

  return (
    <div className="index">
      <Link to="/" style={{ padding: 5 }}>
        <div className='index-header'>👋, Hi</div>
      </Link>
      <div className='index-body'>
        <div className='index-row' style={mobile ? { margin: '0 10%'} : {margin: '0 30%'}}>
          <div className='index-body-card'>
            <Link to="/home">Personalized Homepage </Link>
          </div>
          <div className='index-body-card'>
            <Link to="/front/js">Front-end</Link>
          </div>
          <div className='index-body-card'>
            <Link to="/three">Three JS demo</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Index;
