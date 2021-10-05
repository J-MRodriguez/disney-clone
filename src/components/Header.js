/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="homeicon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="homeicon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="homeicon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="homeicon" />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="homeicon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="homeicon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://lh3.googleusercontent.com/-IRVsfnK177g/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuckdoBB4K8U2Hh8RFsg0cNc5yU3WXg/s48-c/photo.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
