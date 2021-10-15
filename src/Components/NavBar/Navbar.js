import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavStyles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Nav.css";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h3>My Shop</h3>
        </NavLink>
        <Bars />
        <NavMenu>
          <div className="formContainer">
            <input
              placeholder="Search"
              // onChange={props.onType}
              className="searchInput"
              // value={props.searchText}
              type="text"
            />
           
          </div>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">JOIN NOW</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/signin">SIGN IN </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavLink to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {/* {basket?.length} */}
              </span>
            </div>
          </NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
