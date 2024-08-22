import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/home/navbar/Navbar';
import About from './components/about/About';



function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
      {/*    <Route path="*" element={<NotFound />} /> */}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
