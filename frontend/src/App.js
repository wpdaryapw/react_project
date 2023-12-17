import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import BasketPage from './pages/BasketPage/BasketPage';
import CategoriesPage from './pages/CategoriesPage/CategoriesPage';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <div className='wrapper'>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='categories/all' element={<CategoriesPage/>}/>
        <Route path="category/:id" element={<ProductListPage type='category'/>}/>
        <Route path="products/all" element={<ProductListPage type='all'/>}/>
        <Route path="products/sales" element={<ProductListPage type='sales'/>}/>
        <Route path='products/:id' element={<ProductInfoPage/>}/>
        <Route path='basket' element={<BasketPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
