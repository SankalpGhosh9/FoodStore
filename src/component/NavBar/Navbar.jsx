import { useContext, useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StoreContext } from '../../context/StoreContext';

const styleCartIcon ={
  width: '30px',
  height: '30px',
  padding:"0px 0px 0px -10px"
}
const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState("home");
  const {getTotalCartAmount} =useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to='/'><h1>Foodstore</h1></Link>
        {/* <img src={assets.logo} alt="" className="logo" /> */}
        <ul className="navbar-menu">
            <Link to='/' onClick={() =>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={() =>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
            <a href='#footer' onClick={() =>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            {/* <img src={assets.search_icon} alt="" /> */}
            <div className="navbar-search-icon">
              <Link to="/cart"><ShoppingCartIcon style={styleCartIcon} className='icons'/></Link>
                
                {/* <img src={assets.shopping_cart} alt="" /> */}
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>SignUp</button>
        </div>
    </div>
  )
}

export default Navbar