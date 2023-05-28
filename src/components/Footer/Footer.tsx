import React from 'react';
import logo from '../../assets/images/rs_school_js.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="team-list">
          {/* <li className="team-list__item">
                        <a href="https://github.com/AndrewMotevich" target="_blank">Andrew Motevich</a>
                    </li> */}
          <li className="team-list__item">
            <a href="https://github.com/tbandelikova" target="_blank" rel="noreferrer">
              Tatsiana Bandelikova
            </a>
          </li>
        </ul>
        <span className="year">2023</span>
        <a href="https://rs.school/react/" target="_blank" className="school" rel="noreferrer">
          <img className="school__logo" src={logo} alt="The Rolling Scopes School" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
