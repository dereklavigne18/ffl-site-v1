/**
 * Nav
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import NavBar from './NavBar';
import NavItem from './NavItem';

const HomeNavItem = styled(NavItem)`
  float: left;
  padding-top: 5px;
  padding-bottom: 0px;
  padding-left: 30px;

  & a {
    font-size: 28px;
    font-family: 'Lobster', cursive;
    color: red;
  }
`;

const Nav = ({ routes }) => {
  let navItems = [];
  if (routes) {
    navItems = routes.reverse().map(route => (
      <NavItem key={route.title}>
        <NavLink to={route.to}>{route.title}</NavLink>
      </NavItem>
    ));
  }

  navItems.unshift(
    <HomeNavItem key="home">
      <NavLink to="/">fancy football</NavLink>
    </HomeNavItem>,
  );

  return <NavBar>{navItems}</NavBar>;
};

Nav.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default Nav;