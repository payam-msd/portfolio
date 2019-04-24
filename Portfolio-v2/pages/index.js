import '../sass/main.scss';

class Index extends React.Component {
  render() {
    return (
      <>
        <header>
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
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="work.html" className="nav-link">
                  My Work
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                  How To Reach Me
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main id="home">
          <div className="background">
            <img
              className="background__svg"
              src="/static/img/undraw_profile_6l1l.svg"
              alt="Freelance-profile"
            />

            <div className="textBox">
              <h1 className="textBox__name">
                PAYAM
                <span className="textBox__family-sub">MAGHSODI</span>
              </h1>
              <div className="textBox__bg-mainText">
                <p className="textBox__mainText">
                  Front-end Developer Designer
                </p>
              </div>
            </div>
          </div>

          <div className="icon">
            <div className="icon__item">
              <i className="lni-instagram-original">
                <a
                  type="button"
                  href="https://www.instagram.com/accounts/login/?next=%2Fpayam_dev%2F&source=follow"
                  className="icon__link"
                >
                  follow
                </a>
              </i>
            </div>
            <div className="icon__item">
              <i className="lni-twitter">
                <a
                  type="button"
                  href="https://twitter.com/payamsd32"
                  className="icon__link"
                >
                  follow
                </a>
              </i>
            </div>
            <div className="icon__item">
              <i className="lni-dribbble">
                <a
                  type="button"
                  href="https://dribbble.com/payamsd32"
                  className="icon__link"
                >
                  follow
                </a>
              </i>
            </div>
            <div className="icon__item">
              <i className="lni-linkedin">
                <a
                  type="button"
                  href="https://www.linkedin.com/in/payamdev/"
                  className="icon__link"
                >
                  follow
                </a>
              </i>
            </div>
            <div className="icon__item">
              <i className="lni-github">
                <a
                  type="button"
                  href="https://github.com/payam-msd"
                  className="icon__link"
                >
                  follow
                </a>
              </i>
            </div>
            <div className="icon__item">
              <i className="lni-telegram">
                <a
                  type="button"
                  href="https://www.telegram.me/payam_dev"
                  className="icon__link"
                >
                  follow
                </a>
              </i>
            </div>
          </div>
          <div className="button">
            <div className="button__item-1">
              <a className="button__link" href="./contact.html">
                hire me
              </a>
            </div>
            <div className="button__item-2">
              <a className="button__link" href="./work.html">
                explore more
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Index;
