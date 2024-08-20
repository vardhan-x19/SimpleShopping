import { CgProfile } from "react-icons/cg";
import { FaGrinHearts } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { BsFillHeartFill } from "react-icons/bs";
import { useRef } from "react";
import { Navigate } from "react-router-dom";
function Header() {
  const itemComp= useSelector(store=>store.addBagItems);
  const cnt=itemComp.length;
  const val=useRef();
  const navigate=useNavigate();
  const btnClicked=()=>{
    const inputValue=val.current.value;
    navigate('/Search',{state:{data:inputValue}} );
  }
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            // src="/images/myntra_logo.webp"
            src="/images/shop9.png"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link to="/Men">Men</Link>
        <Link to="/Women">Women</Link>
        <Link to="/Kids">Kids</Link>
        <Link to={"/Gadgets"}>Gadgets</Link>
        <Link to="/Accessories">Accessories</Link>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div   className="search_bar">
        <span className="material-symbols-outlined search_icon"><CiSearch /></span>
        <input
          className="search_input"
          ref={val}
          placeholder="Search for products, brands and more"
        />
        <button type="button" class="btn btn-info" onClick={btnClicked} >Search</button>
      </div>
      <div className="action_bar">
      <div className="action_container">
      <CgProfile />
      <span className="action_name">Profile</span>
      <div className="profile-dropdown">
        <ul>
          <li><a href="#">View Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Help/Support</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
    </div>
        <Link className="action_container" to="/wishList">
          {/* <span className="material-symbols-outlined action_icon">favorite</span> */}
          <BsFillHeartFill />
          <span className="action_name">Wishlist</span>
        </Link>

        <Link className="action_container" to="/bag">
          {/* <span className="material-symbols-outlined action_icon">shopping_bag</span> */}
          <IoBagAdd />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{cnt} </span>
        </Link>
      </div>
    </header>
  );
}
export default Header;
