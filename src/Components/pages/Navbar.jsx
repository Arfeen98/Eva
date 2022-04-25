import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
// import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";

var NavBar=styled.nav`
color:blue;
    width: 90%;
    margin: auto;
    height: 40px;
    background-color: #fd9b95;
    text-align: center;
    font-size:20px;
    justify-content: space-around;
`

export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully 
  return (
    <>
      <NavBar >
        {/* keep all the NavLinks here */}
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to={token? "/login" : "/logout"}>{token? "logout" : "login"}</Link>
        <Link to="/about">About</Link>
      </NavBar>
    </>
  );
};
