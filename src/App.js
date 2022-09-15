import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/body/Home';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import Contact from './pages/body/Contact';
import About from './pages/body/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DetailsCate from './pages/body/DetailsCate';
import DetailsProducts from './pages/body/DetailsProducts';
import DetailsPosts from './pages/body/DetailsPosts';
import DetailsAccount from './pages/body/home_page/Account/DetailsAccount';
import DetailsCart from './pages/body/DetailsCart';
import Checkout from './pages/body/Checkout';
import Register from './pages/body/home_page/Account/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="detailpost" element={<DetailsPosts />} />
        <Route path="detailproduct" element={<DetailsProducts />} />
        <Route path="detailproductcate" element={<DetailsCate />} />
        <Route path="register" element={<Register />} />
        <Route path="detailaccount" element={<DetailsAccount />} />
        <Route path="detailcart" element={<DetailsCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
