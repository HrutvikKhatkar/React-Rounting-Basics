

// npm install react-router-dom@6
//make sure to install it


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import BlogItemDetails from './components/BlogItemDetails';
import NotFound from './components/NotFound';

import './App.css';

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <div className="responsive-container">
        <Header />
        <div className="app-body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/blogs/:id" element={<BlogItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default App;


