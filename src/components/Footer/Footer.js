import React from 'react';
import github from '../../images/github.svg';
import facebook from '../../images/facebook.svg';

function Footer() {
  return (
    <footer className='footer'>
      <p className="footer__copyright">&copy; 2020 Made by Dmitry Melnik</p>
        <div className='footer__icon-links'>
          <a href='https://github.com/escar85' target='blank' className='footer__link'>
            <img alt='github' src={github} className='footer__social-icon' />
          </a>
          <a href='https://ru-ru.facebook.com/' target='blank' className='footer__link'>
            <img alt='facebook' src={facebook} className='footer__social-icon' />
          </a>
        </div>
    </footer>
  );
};

export default Footer;
