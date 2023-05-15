import React from 'react';

const WelcomePage = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">LOGO</h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="wrap">
            <div className="intro">
              <div className="shape">
                <h2 className="title">Welcome!</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi cupiditate
                  numquam dolores consectetur nihil ullam voluptatem distinctio labore iusto libero
                  doloremque quidem sequi, perspiciatis officiis voluptates, porro esse earum.
                </p>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi cupiditate
                  numquam dolores consectetur nihil ullam voluptatem distinctio labore iusto libero
                  doloremque quidem sequi, perspiciatis officiis voluptates, porro esse earum.
                </p>
              </div>
            </div>
            <a href="#" className="link">
              Sign In / Sign Up
            </a>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">FOOTER</div>
      </footer>
    </>
  );
};

export default WelcomePage;
