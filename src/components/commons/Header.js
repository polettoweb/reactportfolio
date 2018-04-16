import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive'; 
import logo from '../../img/logo.png';
import toggle from '../../img/toggle.svg';

class Header extends Component {
    handleMenu() {
        let el = document.querySelector(".nav__container>nav");
        el.classList.toggle('open');
    }
    render() {
      return (
        <header>
            <div className="header--top">
                <div className="nav__container">
                    <MediaQuery query="(max-device-width: 767px)">
                        <a onClick={this.handleMenu}><img src={toggle} className="toggle" alt="Toggle menu" /></a>
                    </MediaQuery>
                    <nav>
                        <ul>
                            <li><Link to="/" title="Home">Home</Link></li>
                            <li><Link to="/portfolio" title="Portfolio">Portfolio</Link></li>
                            {/* <li><Link to="/contact" title="Contact">Contact</Link></li> */}
                            <li><Link to="/Blog" title="Blog">Blog</Link></li>
                            <li><Link to="/workshop" title="Workshop">Workshop</Link></li>
                            <li><Link to="/resume" title="Resume">Resume</Link></li>
                        </ul>
                    </nav>
                </div>
                
                {/* <MediaQuery query="(max-device-width: 767px)"> */}

                {/* </MediaQuery> */}
                <h2 className="header__name">Marco Poletto</h2>
                <h3>Frontend Web Developer</h3>
            </div>
            <div className="header__logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
        </header>
      );
    }
  }

  export default Header;