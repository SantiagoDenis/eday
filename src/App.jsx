
import './app.css';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
