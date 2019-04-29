import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {
  render() {
    return (
      <>
        {
          // MAIN SECTION
        }
        <main id="home">
          {
            // MAIN BACKGROUND
          }
          <div className="background">
            <img
              className="background__svg"
              src="../static/img/undraw_profile_6l1l.svg"
              alt="Freelance-profile"
            />

            {
              // TEXT BOX MAIN
            }
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

          {
            // 6 MIDDLE ICONS
          }
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

          {
            // 2 DOWNSIDE BUTTONS
          }
          <div className="button">
            <div className="button__item-1">
              <Link href="/contact">
                <a className="button__link">more about me</a>
              </Link>
            </div>
            <div className="button__item-2">
              <Link href="work">
                <a className="button__link">show some work</a>
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Index;
