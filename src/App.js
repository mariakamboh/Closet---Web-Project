import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Header from './components/Header'
import Footer from './components/Footer'
import Policy from './pages/Privacy'
import FAQs from './pages/FAQs';
import ReturnPolicy from './pages/RentersPolicy'
import Mahendi from './pages/Mehndi'
import Barat from './pages/Barat'
import Walima from './pages/Walima'
import Nikkah from './pages/Nikkah'
import Sherwani from './pages/Sherwani'
import RentalProcess from './pages/RentalProcess';
import ThreePiece from './pages/ThreePiece'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/privacy" element={<Policy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/return-policy" element={<ReturnPolicy />}/>
        <Route path="/privacy" element={<Policy />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/bridal/mahendi" element={<Mahendi/>} />
        <Route path="/bridal/nikkah" element={<Nikkah/>} />
        <Route path="/bridal/walima" element={<Walima/>} />
        <Route path="/bridal/barat" element={<Barat/>} />
        <Route path="/groom/sherwani" element={<Sherwani />} />
        <Route path="/groom/three-piece" element={<ThreePiece />} />
        <Route path="/rental-process" element={<RentalProcess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
