import React, {Component} from 'react';
import { Line } from 'rc-progress';
import ExpCard from './partials/ExpCard';
import Skill from './partials/Skill';

class Resume extends Component {
    render() {
        const shootText = "Maintenance and development of the frontend part of various websites with or without CMS. Develop, refinement and management of the automated development environment (Gulp, GIT, Webpack, browsersynch, etc), of RESTful APIs between Wordpress and other services such as OpenWeather and social networks. Specialisation in Frontend Development and UX experience.";
        const galtoneText = "Maintenance and development of e-commerce websites. My role covers all aspect of development new websites based in Magento and Wordpress. From the creation of the development environment to the release in production. I am specialized in Front end development but I work on the backend too. We use code versioning and I am coordinating in-house and external developers to merge the code into the final product.";
        const freelanceText = "The beginning of my developer career. A freelance role that allows me to develop projects from the wireframe to the production code. Managing clients and their expectations. Work independently and with tight deadlines.";
        const missText = "A new exciting adventure has started. I am part of a big project for migrating a strong and solid website into a new era. As part of the team I am maintening the two company websites (Missguided and Mennace), improving performance, updating/refactoring the code and mentoring more junior developers with a pair programme system.";
        return (
            <section className="resume__container">
                {/* <h1 className="title">Marco Poletto - Frontend Developer</h1> */}
                <section className="resume__intro">
                    <div className="resume__social">
                        <a href="https://twitter.com/polettoweb" target="_blank" rel="noopener noreferrer"><i className="ion-social-twitter"></i></a>
                        <a href="https://www.linkedin.com/in/marco-poletto-96853774/" target="_blank" rel="noopener noreferrer"><i className="ion-social-linkedin"></i></a>
                        <a href="https://plus.google.com/+MarcoPoletto" target="_blank" rel="noopener noreferrer"><i className="ion-social-googleplus"></i></a>
                        <a href="mailto:marco@marcopoletto.co.uk"><i className="ion-email"></i></a>
                    </div>
                    
                </section>
                <section className="experience__container">
                    <h3>Experience</h3>
                    <ul className="experience">
                        <ExpCard number="odd first" title="Frontend Software Engineer" location="Missguided LTD - Manchester" date="December 2017 - Now" text={missText}/>
                        <ExpCard number="even second" title="Frontend Web Developer" location="Shoot The Moon LTD - Manchester" date="April 2017 - December 2017" text={shootText}/>
                        <ExpCard number="odd third" title="Software Developer" location="Galtone LTD - Liverpool" date="June 2015 - March 2017" text={galtoneText}/>
                        <ExpCard number="even fourth" title="Freelance Web Developer" location="Freelance - Italy/Manchester" date="January 2014 - May 2015" text={freelanceText}/>
                    </ul>
                </section>
                <section className="skills__container">
                    <h3>Skills</h3>
                    <Skill title="Professional">
                        <div className="skill__title">
                            <p>Frontend Development - 90%</p>
                            <Line percent="90" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Email Development - 90%</p>
                            <Line percent="90" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Reactive Development - 80%</p>
                            <Line percent="80" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Prototyping - 85%</p>
                            <Line percent="85" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>UX/UI Design - 80%</p>
                            <Line percent="80" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Backend Development - 60%</p>
                            <Line percent="60" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Use cases - 90%</p>
                            <Line percent="90" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                        </div>
                    </Skill>
                    <Skill title="Detailed">
                        <div className="skill__title">
                            <p>Test-driven Development - 70%</p>
                            <Line percent="70" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>HTML / CSS - 90%</p>
                            <Line percent="90" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Reactive Frameworks (React, VueJS) - 80%</p>
                            <Line percent="70" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Prototyping Tools (Proto.io, Invision) - 85%</p>
                            <Line percent="85" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Adobe Creative Suite - 70%</p>
                            <Line percent="70" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>PHP and MySQL - 60%</p>
                            <Line percent="60" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Magento - 70%</p>
                            <Line percent="70" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                        </div>
                    </Skill>
                    <Skill title="Personal">
                        <div className="skill__title">
                            <p>Commitment - 100%</p>
                            <Line percent="100" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Punctuality - 100%</p>
                            <Line percent="100" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Leadership - 90%</p>
                            <Line percent="80" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Communication Skill - 80%</p>
                            <Line percent="70" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Analytical Skill - 90%</p>
                            <Line percent="90" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Teamwork - 85%</p>
                            <Line percent="85" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                            <p>Self-Motivation - 100%</p>
                            <Line percent="95" strokeWidth="2" strokeColor="#4db2b3" prefixCls="skill" trailWidth="2" trailColor="#f4f5f7"/>
                        </div>
                    </Skill>
                </section>

<div className="home__me">
                        <div className="resume__buttons">
                            <a className="button" href="https://marcopoletto.co.uk/marco-poletto-cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</a>
                            <a className="button" href="mailto:marco@marcopoletto.co.uk">Contact Me</a>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Resume;
