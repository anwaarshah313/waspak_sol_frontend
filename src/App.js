import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/home/navbar/Navbar';
import About from './components/about/About';
import Star from './components/Animations/Star';
import FooterAnimation from './components/Footer/FooterAnimation'
import Footer from './components/Footer/Footer';
// import Testimonials from './components/home/Testimonials/Testimonials';





function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
  <Star/>
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
      {/*    <Route path="*" element={<NotFound />} /> */}
      </Routes>
   
<FooterAnimation/>
<Footer/>
    </BrowserRouter>
  );
}

export default App;
