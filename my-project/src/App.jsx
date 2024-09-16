import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/homepage';
import Contact from './component/Contact/contact';
import Products from './component/Products/products';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
