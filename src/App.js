import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='contact' element={ <Contact /> } />
          <Route path='pricing' element={ <Pricing /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
