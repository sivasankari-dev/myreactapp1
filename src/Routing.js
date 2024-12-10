import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';

 function Routing() {
  return (
    <Routes>
        <Route path = "/" Component={Home}></Route>
        <Route path = "/Contact" Component={Contact}></Route>
        <Route path = "/About" Component={About}></Route>
    </Routes>
  )
}

export default Routing;