import React from "react";
import { Nav, NavLink,NavMenu, NavBtn, NavBtnLink } from "./NavStyles";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Nav.css";
import Toggle from "../Toggle/Toggle";
const Navbar = () => {
  //  const styles = {
  //    navToggle: {
  //     //  height: "10vh",
  //     // //  borderBottom: "0.5px grey solid",
  //     //  display: "flex",
  //     //  justifyContent: "flex-end",
  //     //  alignItems: "center",
  //    },
  //  };
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h3>ZAGOAL</h3>
        </NavLink>

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
        <NavMenu>
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
          <NavBtn>
            {/* <nav style={styles.navToggle}> */}
              <Toggle />
            {/* </nav> */}
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
