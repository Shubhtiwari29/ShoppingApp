
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/header';

function App() {
  return (
    <div>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>

          <Route exact path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
