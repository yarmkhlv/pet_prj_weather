import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './home/home';
import Stats from './stats/stats';
import Help from './help/help';
import './app.css';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="stats" element={<Stats />} />
          <Route path="help" element={<Help />} />
          <Route path="home/*" element={<Home />} />
          <Route path="*" element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
