import { Routes, Route } from "react-router-dom";
import Index from './pages/layout';
import Home from './pages/home';
import ErrorPage from './pages/error/index';
import Front from './pages/front';
import Three from './pages/three';
import Me from './pages/me';

import './App.less';
import 'animate.css';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="home/*" element={<Home />}/>
      <Route path="front" element={<Front />} />
      <Route path="three/*" element={<Three />} />
      <Route path="me" element={<Me />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
