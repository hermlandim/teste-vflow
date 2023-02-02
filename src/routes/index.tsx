import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import Contracts from '../pages/Contracts';
import Invoice from '../pages/Invoice';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Contracts" element={<Contracts />} />
      <Route path="/Invoice" element={<Invoice />} />
    </Routes>
  );
};

export default RoutesMain;
