import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <>
        <main id="about">
          <h1 className="textBox__title">
            About
            <span className="textBox__family-sub">Me</span>
          </h1>

          <div className="aboutMe">
            <div className="aboutMe__bg-avatar">
              <img
                src="/static/img/portrait.jpg"
                alt="bg-photo"
                className="aboutMe__avatar"
              />
            </div>

            <div lang="en" className="aboutMe__mainText">
              <p>
                I'm an Iranian Freelance Interactive Developer, Currently living
                in Iran and I've been Working Independently. Autodidact
                Developer. Interested in Graphic-Design. To This Day I Still
                Design Personal Projects as well as Client work.
              </p>
              <p>
                This atypical Background Allows me To be Very Sensitive to
                visual details, animation or Typography. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Adipisci, facilis. Recusandae
                amet est quos officia qui illo, ab ad esse iure numquam voluptas
                laborum. Unde natus voluptas ipsum obcaecati architecto.
              </p>
              <p>
                when i'm not working i love to try new gastronomic restaurants
                or cafe with friends, hitchhiking cities, holding english
                events, foremost, lose my self in the internet
              </p>
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Resume;
