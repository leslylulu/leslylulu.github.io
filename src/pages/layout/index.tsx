import { Outlet, Link } from "react-router-dom";
import './index.less';

const Index = () => {

  return (
    <div className="index">
      <Link to="/" style={{ padding: 5 }}>
        <div className='index-header'>👋, Hi</div>
      </Link>
      <div className='index-body'>
        <div className='index-row'>
          <div className='index-body-card'>
            <Link to="/home">Personalized Homepage </Link>
          </div>
          <div className='index-body-card'>
            <Link to="/front">Front-end</Link>
          </div>
        </div>
        <div className='index-row'>
          <div className='index-body-card'>
            <Link to="/three">Three JS demo</Link>
          </div>
          <div className='index-body-card'>
            <Link to="/me">Contact me</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Index;
