import './App.css';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import Header from "./Components/Header"
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Header/>
    <Routing/>
    <MainComponent/>
    </div>
    </BrowserRouter>
  );
}

export default App;
