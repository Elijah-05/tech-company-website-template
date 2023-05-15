import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";

function App() {
  return (
    <div className="App bg-slate-50 ">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="started" element={<GetStarted />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
