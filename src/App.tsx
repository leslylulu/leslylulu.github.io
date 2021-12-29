import './App.css';
import 'animate.css';

function App() {

  return (
    <div className="index">
      <div className='index-body'>
        <div className='index-row'>
          <div className='index-body-card' style={{background: '#D3E4CD'}}> A</div>
          <div className='index-body-card' style={{background: '#99A799'}}> B</div>
        </div>
        <div className='index-row'>
          <div className='index-body-card' style={{background: '#F2DDC1'}}>C</div>
          <div className='index-body-card' style={{background: '#E2C2B9'}}>D</div>
        </div>
      </div>
    </div>
  );
}

export default App;
