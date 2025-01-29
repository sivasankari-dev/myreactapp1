import './App.css';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Header from "./Components/Header"
import MainComponent from './Components/MainComponent';
import SimpleSlider from './Components/SimpleSlider';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Header/>
    <Routing/>
    <MainComponent/>
    </div>
    <div><SimpleSlider/></div>
    </BrowserRouter>
  );
}

export default App;
