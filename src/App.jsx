
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/prodList/ProdList';
import PopularPList from './components/popularPList/PopularPList';
import Contact from './components/contact/Contact';
import About from './components/about/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <div className="container">
          <Routes>

            <Route path='/' element={<Landing/>}/>

            <Route path='productos' element={<ProductList/>} />

            <Route path='productos-populares' element={<PopularPList/>} />

            <Route path='contacto' element={<Contact/>}/>

            <Route path='sobre-nosotros' element={<About/>}/>

            <Route path='/*' element={<Navigate to='/' replace />} /> 

          </Routes>
        </div>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
