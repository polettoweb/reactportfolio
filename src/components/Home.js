import React, {Component} from 'react';
import HomeSlider from './partials/HomeSlider';
import Card from './partials/Card';
import design from '../img/pantone.svg';
import code from '../img/programming.svg';
import seo from '../img/analysis.svg';

const designText = "Creation of Logos and brand identities. Designing websites starting from wireframes and mock-ups for a totally customizable experience.";
const codeText = "Writing clean code for best performance and high scalability. Using the latest technologies, I write code whether if it's completely custom, or using cms like Magento and Wordpress.";
const seoText = "Service of optimization for your existing website. I can work on the existing code for the optimization of the code and for improvement in search engines' results.";
const cvHref = "https://marcopoletto.co.uk/marco-poletto-cv.pdf";
class Home extends Component {
    render() {
        return (
            <div>
                <section className="home__intro">
                    <div className="home__social">
                        <a href="https://github.com/polettoweb" title="GitHub Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-github"></i></a>
                        <a href="https://twitter.com/polettoweb" title="Twitter Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/marco-poletto-96853774/" title="Linkedin Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-linkedin"></i></a>
                        <a href="https://plus.google.com/+MarcoPoletto" title="Google+ Page" target="_blank" rel="noopener noreferrer"><i className="ion-social-googleplus"></i></a>
                        <a href="mailto:marco@marcopoletto.co.uk" title="Contact me via email"><i className="ion-email"></i></a>
                    </div>
                    <div className="home__me">
                        <h1>Hello, my name is Marco, I'm a <strong>Web Developer </strong>and a <strong>Frontend </strong><strong>Software Engineer</strong>.</h1><p> I create websites from scratch using the latest cutting edge web technologies. <strong>Innovation</strong>, <strong>clean code</strong> and <strong>pixel perfect</strong> results characterize all my projects. With attention to details, I always deliver the best solution to the clients according to their requirements.</p>
                        <div className="home__buttons">
                            <a class="button" href={cvHref} target="_blank" rel="noopener noreferrer" title="Download CV">Download CV</a>
                        </div>
                    </div>
                </section>
                <section className="home__container">
                    {/* <h1 className="title">Marco Poletto - Web Developer Frontend Software Engineer</h1> */}
                    <section className="home__carousel">
                        <h3>Recent Works</h3>
                        <HomeSlider />
                        
                    </section> 
                    <section className="cards__container">
                        <h3>Services</h3>
                        <div className="cards">
                                <Card title="Design" logo={design} text={designText}/>
                                <Card title="Develop" logo={code} text={codeText}/>
                                <Card title="SEO &amp; Optimisation" logo={seo} text={seoText}/>
                        </div>
                        <div className="cards__buttons">
                            <a className="button" title="Contact Me" href="mailto:marco@marcopoletto.co.uk">Contact Me</a>                        
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default Home;
