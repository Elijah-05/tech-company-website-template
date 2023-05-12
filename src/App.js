import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Pricing from './component/Pricing';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Layout /> } >
          <Route index element={ <Home /> } />
          <Route path='about' element={ <Home /> } />
          <Route path='contact' element={ <Home /> } />
          <Route path='pricing' element={ <Home /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
