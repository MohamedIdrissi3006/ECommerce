import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import SignUp from './Pages/Signup';
import Footer from './Components/Footer/Footer';
import man_banner  from './Components/Assets/banner_mens.png'
import kid_banner  from './Components/Assets/banner_kids.png'
import women_banner  from './Components/Assets/banner_women.png'
import Login from './Pages/Login';
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_BACKEND_API_URL}/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			console.log(data)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop user={user} />} />
          <Route path='/mens' element={<ShopCategory user={user}  banner={man_banner} category='men' />} />
          <Route path='/womens' element={<ShopCategory user={user}  banner={women_banner} category='women' />} />
          <Route path='/kids' element={<ShopCategory  user={user}  banner={kid_banner} category='kid' />} />
          <Route path='/product' element={<Product user={user} />} >
          <Route path=':productId' element={<Product user={user} />} />
          </Route>
          <Route path='/cart' element={<Cart user={user}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
<Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
