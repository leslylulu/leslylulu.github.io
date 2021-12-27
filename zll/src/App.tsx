import './App.css';
import 'animate.css';

function App() {
  const handleAddAnimate = () => {
  };

  return (
    <div className="App">
      <div className="box" onClick={handleAddAnimate}>
        <p className={`box-title animate__animated animate__bounce`}>welcome to lesly lulu channel</p>
      </div>
    </div>
  );
}

export default App;
