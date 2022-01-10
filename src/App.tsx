import { Routes, Route } from "react-router-dom";
import Index from './pages/layout';
import Home from './pages/home';
import AnnualSummary from './pages/home/2022/annualsummary/index';
import Front from './pages/front';
import Three from './pages/three';
import Me from './pages/me';

import './App.less';
import 'animate.css';

const App = () => {
  
  return (
    <div>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* @ts-ignore */}
          <Route path="/home" element={<Home />}>
            <Route path="annualsummary" element={<AnnualSummary />} />
          </Route>
          <Route path="/front" element={<Front />} />
          <Route path="/three" element={<Three />} />
          <Route path="/me" element={<Me/>} />
        </Routes>
    </div>
  );
}

export default App;
