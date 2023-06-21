import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './routes/ItemListContainer.jsx/ItemListContainer';
import ItemDetailContainer from './routes/ItemDetailContainer.jsx/ItemDetailContainer';
import NavBar from './componentes/NavBar/NavBar'
import TopDatos from './componentes/TopDatos/TopDatos'
import Footer from './componentes/Footer/Footer';
import CartProvider from './context/Context';
import Home from './routes/Home/Home';
import PreFooter from './componentes/PreFooter/PreFooter';
import JoyasListContainer from './routes/JoyasListContainer/JoyasListContainer'
import JoyasDetailContainer from './routes/JoyasDetailContainer/JoyasDetailContainer'
import TechListContainer from './routes/TechListContainer/TechListContainer';
import TechDetailContainer from './routes/TechDetailContainer/TechDetailContainer';
import Cart from './routes/Cart/Cart';
import Form from './routes/Form/Form';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <CartProvider>
      <TopDatos/>
      <NavBar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/items/:id' element={<ItemDetailContainer />} />
      <Route path='/Relojes' element={<ItemListContainer />} />
      <Route path='/Joyas' element={<JoyasListContainer/>} />
      <Route path='/joyas/:id' element={<JoyasDetailContainer/>} />
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/Tecno' element={<TechListContainer/>} />
      <Route path='/tecno/:id' element={<TechDetailContainer/>} />
    </Routes>
        <PreFooter/>
        <Footer/>
        </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App;

