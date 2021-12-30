import './App.less';
import 'animate.css';

const App = () => {
  return (
    <div className="index">
      <div className='index-header'>👋, Hi</div>
      <div className='index-body'>
        <div className='index-row'>
          <div className='index-body-card'>Personalized Homepage</div>
          <div className='index-body-card' >Front-end related</div>
        </div>
        <div className='index-row'>
          <div className='index-body-card'>Three JS demo</div>
          <div className='index-body-card'>Contact me</div>
        </div>
      </div>
    </div>
  );
}

export default App;
