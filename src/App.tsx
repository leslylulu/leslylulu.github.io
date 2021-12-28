import './App.css';
import 'animate.css';

function App() {
  const handleAddAnimate = () => {
  };

  return (
    <div className="App">
      <div className="box" onClick={handleAddAnimate}>
        <div className={`box-title animate__animated animate__bounce`}>welcome to lesly lulu channel</div>
        <span className={`box-title animate__animated animate__backInUp`}>.test</span>
      </div>
    </div>
  );
}

export default App;
