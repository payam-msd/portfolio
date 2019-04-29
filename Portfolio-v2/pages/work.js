import React, { Component } from 'react';
import Link from 'next/link';

class Work extends Component {
  render() {
    return (
      <>
        <main>
          <div className="grid">
            <div className="grid__item theme-1">
              <div className="grid__item-content">
                <nav className="grid__item-nav">
                  <Link href="/">
                    <a className="grid__item-link">&larr; Back Home</a>
                  </Link>
                  <a href="http://dastaniran.com" className="grid__item-link">
                    Demo
                  </a>
                </nav>
                <h2 className="grid__item-title grid__item-title--small">
                  DASTAN IRAN
                </h2>
                <p className="grid__item-text">
                  Isfahan is a city in central Iran, known for its Persian
                  architecture. In the huge Naqsh-e Jahan Square is the
                  17th-century Imam (Shah) Mosque, whose dome and minarets are
                  covered with mosaic tiles and calligraphy. Ali Qapu Palace,
                  built for Shah Abbas and completed in the late 16th century,
                  has a music room and a verandah overlooking the square’s
                  fountains. Sheikh Lotfollah Mosque is known for its intricate
                  tiling.
                </p>
                <a
                  href="https://en.wikipedia.org/wiki/Isfahan"
                  className="grid__item-link"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="grid__item grid__item--bg theme-2">
              <div
                className="grid__item-img"
                data-displacement="/static/img/displacement/8.jpg"
                data-intensity="-0.65"
                data-speedIn="1.2"
                data-speedOut="1.2"
              >
                <img src="/static/img/Img22.jpg" alt="Image" />
                <img src="/static/img/Img21.jpg" alt="Image" />
              </div>
              <div className="grid__item-content">
                <span className="grid__item-meta">Iran</span>
                <h2 className="grid__item-title grid__item-title--small">
                  See Isfahan In The NIGHT
                </h2>
                <h3 className="grid__item-subtitle">
                  <span>Iran's last tours + spots</span>
                  <a className="grid__item-link" href="https://dastaniran.com">
                    Discover more
                  </a>
                </h3>
              </div>
            </div>
            <div className="grid__item grid__item--bg theme-3">
              <div
                className="grid__item-img"
                data-displacement="/static/img/displacement/4.png"
                data-intensity="0.2"
                data-speedIn="1.6"
                data-speedOut="1.6"
              >
                <img src="/static/img/Img23.jpg" alt="Image" />
                <img src="/static/img/Img24.jpg" alt="Image" />
              </div>
              <div className="grid__item-content">
                <span className="grid__item-meta">Italy</span>
                <h2 className="grid__item-title">Calm Serenity</h2>
                <h3 className="grid__item-subtitle">
                  <span>Italy's secret meadows and fields</span>
                  <a className="grid__item-link" href="#">
                    Check them out
                  </a>
                </h3>
              </div>
            </div>
            <div className="grid__item theme-4">
              <div className="grid__item-content">
                <nav className="grid__item-nav">
                  <a href="#" className="grid__item-link">
                    Demo
                  </a>
                </nav>
                <h2 className="grid__item-title grid__item-title--small">
                  Qualm Inspiration for Everybody
                </h2>
                <p className="grid__item-text">
                  Muse about, something incredible is waiting to be known,
                  courage of our questions tesseract hearts of the stars great
                  turbulent clouds the only home.
                </p>
                <a href="#" className="grid__item-link">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Work;
