import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

class Footer extends Component {
    setCopyrightDate() {
        var year = new Date().getFullYear();
        return year;
    }
    render() {
      return (
        <footer>
            <div className="footer__content">
                <div className="footer__logo">
                    <Link to="/" title="Marco Poletto">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                    <div className="footer__copy">
                        <p>&copy; {this.setCopyrightDate()} Marco Poletto</p>
                    </div>
                </div>
                <div className="footer__social">
                    <a href="https://twitter.com/polettoweb" target="_blank" rel="noopener noreferrer"><i className="ion-social-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/marco-poletto-96853774/" target="_blank" rel="noopener noreferrer"><i className="ion-social-linkedin"></i></a>
                    <a href="https://plus.google.com/+MarcoPoletto" target="_blank" rel="noopener noreferrer"><i className="ion-social-googleplus"></i></a>
                    <a href="mailto:marco@marcopoletto.co.uk"><i className="ion-email"></i></a>
                </div>
            </div>
        </footer>
      );
    }
  }

  export default Footer;