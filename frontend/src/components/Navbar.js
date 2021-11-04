import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <Link to="/">
          <img className="logo" src="/shop.png" alt="web store logo"/>
        </Link>
        <div className="navbarMiddle">
          <Link to="/">Tooted</Link>
          <Link to="categories">Kategooriad</Link>
        </div>
      </div>
      <Link to="cart">
        <img className="cart" src="/cart.png" alt="cart pic"/>
      </Link>
    </div>
  );
}

export default Navbar;