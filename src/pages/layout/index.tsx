import { useNavigate } from "react-router-dom";
import './index.less';

const Index = () => {
  let navigate = useNavigate();
  const handleJump = (url: string) => {
    navigate(url);
  }

  return (
    <div className="index">
      <div className='index-header'>👋, Hi</div>
      <div className='index-body'>
        <div className='index-row'>
          <div className='index-body-card' onClick={() => handleJump('/home')} >
            Personalized Homepage
          </div>
          <div className='index-body-card' onClick={() => handleJump('/front')} >
            Front-end
          </div>
        </div>
        <div className='index-row'>
          <div className='index-body-card' onClick={() => handleJump('/three')}>
            Three JS demo
          </div>
          <div className='index-body-card' onClick={() => handleJump('/me')}>
            Contact me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
