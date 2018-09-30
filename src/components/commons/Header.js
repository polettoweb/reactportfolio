import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import toggle from '../../img/toggle.svg';

class Header extends Component {
    handleMenu() {
        let el = document.querySelector(".nav__container>nav");
        let name = document.querySelector(".mobileName");
        el.classList.toggle('open');
        if (name) name.classList.toggle('open');

    }
    render() {
      return (
        <header>
            <div className="header--top">
                <div className="nav__container">
                    <div className="header__mobile">
                        <a className="toggleLink" onClick={this.handleMenu}><img src={toggle} className="toggle" alt="Toggle menu" /></a>
                        <p className="mobileName" >Marco Poletto</p>
                    </div>
                    <nav>
                        <ul>
                            <li onClick={this.handleMenu}><Link to="/" title="Home">Home</Link></li>
                            <li onClick={this.handleMenu}><Link to="/portfolio" title="Portfolio">Portfolio</Link></li>
                            <li onClick={this.handleMenu}><Link to="/blog" title="Blog">Blog</Link></li>
                            <li onClick={this.handleMenu}><Link to="/workshop" title="Workshop">Workshop</Link></li>
                            <li onClick={this.handleMenu}><Link to="/resume" title="Resume">Resume</Link></li>
                        </ul>
                    </nav>
                </div>
                
                <h2 className="header__name">Marco Poletto</h2>
                {/* <h3>Frontend Web Developer</h3> */}
            </div>
            <div className="header__logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
        </header>
      );
    }
  }

  export default Header;