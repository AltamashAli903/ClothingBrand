import { Routes, Route} from 'react-router-dom';
import './App.css';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Kurta from './components/Kurta/Kurta';
import CordSet from './components/CordSet/CordSet';
import Trouser from './components/Trouser/Trouser';
import Shirt from './components/Shirt/Shirt';
import CartPage from './components/CartPage/CartPage';

function App() {
  return (
    <div className="App pt-2">
      <Header />
      

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/kurta' element={<Kurta />} />
        <Route path='/cordset' element={<CordSet />} />
        <Route path='/shirt' element={<Shirt />} />
        <Route path='/trouser' element={<Trouser />} />
        <Route path='/cartpage' element={<CartPage/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
