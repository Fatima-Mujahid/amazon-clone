import React from 'react';
import './Header.css';
import logo from './Amazon_logo.svg';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Amazon Logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div className="header__option" onClick={logoutHandler}>
            <span className="header__optionLineOne">
              Hello,{' '}
              {user
                ? user.email.substring(0, user.email.lastIndexOf('@'))
                : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">&amp; Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
