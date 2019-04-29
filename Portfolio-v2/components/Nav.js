import React, { Component } from 'react';
import Link from 'next/link';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: true };
  }

  handleEvent = e => {
    const menuBtn = document.querySelector('.McButton');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navBg = document.querySelector('.navigation__background');
    const navItems = document.querySelectorAll('.nav-item');

    // Set Initial State Of Menu
    e.preventDefault();
    if (this.state.showMenu) {
      menuBtn.classList.add('logo-light');
      navBg.classList.add('remove_bg');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
      this.setState({ showMenu: false });
    } else {
      menuBtn.classList.remove('logo-light');
      navBg.classList.remove('remove_bg');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
      this.setState({ showMenu: true });
    }
  };

  render() {
    return (
      <>
        <a
          className="McButton"
          onClick={this.handleEvent}
          data="hamburger-menu"
        >
          <b />
          <b />
          <b />
        </a>

        <div className="navigation__background ">&nbsp;</div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/work">
                <a className="nav-link">Work</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/resume">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Nav;
