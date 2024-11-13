import {  Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import GroundDetail from './component/GroundDetail';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="groundDetail/:id" element={<GroundDetail />} />
    </Route>
  </Routes>
  );
}

export default App;
