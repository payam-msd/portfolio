import Link from 'next/link';

const Nav = () => (
  <>
    <a className="McButton" data="hamburger-menu">
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
export default Nav;
