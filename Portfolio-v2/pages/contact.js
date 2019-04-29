import React, { Component } from 'react';

export default class contact extends Component {
  render() {
    return (
      <>
        <main>
          <div className="split left__props">
            <h1 className="textBox__name">
              GET IN
              <span className="textBox__family-sub">touch</span>
            </h1>
            <h2 className="textBox__mainText-2">Let's do something amazing</h2>
            <div className="boxes">
              <div className="boxes__context">
                <span> payammgh17@gmail.com</span>
              </div>
              <div className="boxes__context">
                <span>(+98) 903-190-1841</span>
              </div>
              <div className="boxes__context">
                <span>Iran,Razavi-khorasan,mashhad</span>
              </div>
            </div>
          </div>
          <div className="split right__props">
            <img className="right__img" src="/static/img/Img12.jpg" alt="img" />
          </div>
        </main>
      </>
    );
  }
}
