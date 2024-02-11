import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import img from '../Assets/imagep.png'

const Navbar = (userDetail) => {
  const userd = userDetail.user;
	// const logout = () => {
	// 	window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
	// };
  const [menu, setMenu] = useState("shop");
  const { getTotatCartItems } = useContext(ShopContext)
  console.log(getTotatCartItems())

  const [profile, setProfile] = useState(false);
  return (
    <div className='navbar'>
      <div className="nav-logo">

        <img src={logo} alt="" style={{ width: '50px', height: 'auto' }} />

        <p>La Socco</p>


      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('shop')}><Link to='/' style={{ textDecoration: 'none' }}> Shop </Link>{menu === 'shop' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('men')}><Link to='/mens' style={{ textDecoration: 'none' }}> Men </Link>{menu === 'men' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('women')}> <Link to='/womens' style={{ textDecoration: 'none' }}> Women </Link>{menu === 'women' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('kids')}> <Link to='/kids' style={{ textDecoration: 'none' }}> Kids </Link>{menu === 'kids' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">


      {userd ? (
      // If user exists, show user details
      <div>
        <img src={img} className='user-pic' />
        {/* <div className="sub-menu-wrap">
          <div className="sub-menu">
            <div className="user-info">
              <img src={img} />
              <h3> {userd.user.displayName}</h3>
            </div>
            <hr />
            <button >Logout</button>
          </div>
        </div> */}
      </div>
    ) : (
      // If user does not exist, show login button
      <Link to='/login'>
        <button>Login</button>
      </Link>
    )}

        <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">

          {getTotatCartItems()}
        </div>
      </div>
    </div>
  )
}

export default Navbar