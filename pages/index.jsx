import React from "react";

export default function Index() {
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar-wrapper">
                    <div className="profile-container">
                        <img className="profile rounded-circle"
                             src="https://s.gravatar.com/avatar/5a2181af432f7e87e8d505a17dd5254b?s=180"
                             alt="https://rickynguyen.info"/>
                        <h3 className="name">NGUYỄN ĐỨC NGÂN</h3>
                        <h4 className="nickname">Ricky</h4>
                        <h6 className="tagline">Senior full-stack developer</h6>
                    </div>
                    <div className="contact-container container-block">
                        <ul className="list-unstyled contact-list">
                            <li className="email"><i className="fas fa-envelope"/><a
                                href="mailto: ducngan90@gmail.com">
                                ducngan90@gmail.com</a>
                            </li>
                            <li className="website"><i className="fa fa-rss" aria-hidden="true"/>
                                <a href="https://kikiguru.com" target="_blank">https://kikiguru.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="education-container container-block">
                        <h2 className="container-block-title">Education</h2>
                        <div className="item">
                            <h4 className="degree">Bachelor degree at Computer Science</h4>
                            <h5 className="meta">Ho Chi Minh City University of Technology</h5>
                            <div className="time">2009 – 2014</div>
                        </div>
                        <div className="item">
                            <h4 className="degree">Google Cloud Certified - Professional Cloud Architect</h4>
                            <div className="time">2021</div>
                        </div>
                    </div>

                    <div className="languages-container container-block">
                        <h2 className="container-block-title">Languages</h2>
                        <ul className="list-unstyled interests-list">
                            <li>Vietnamese <span className="lang-desc">(Native)</span></li>
                            <li>English <span className="lang-desc">(Fluent)</span></li>
                        </ul>
                    </div>
                    <div className="interests-container container-block">
                        <h2 className="container-block-title">Interests</h2>
                        <ul className="list-unstyled interests-list">
                            <li>Trekking</li>
                            <li>Travel</li>
                        </ul>
                    </div>
                </div>
                <div className="main-wrapper">
                    <section className="section summary-section">
                        <h2 className="section-title">
                            <span className="icon-holder"><i className="fas fa-user"/></span>
                            PROFILE
                        </h2>
                        <div className="summary text-justify">
                            <p>
                                I am a senior full-stack developer with <u>10 years of work experience</u> in software
                                development
                                with <b>8 years for build up an insurance system at enterprise level from scratch</b>.
                                I have intensive knowledge about OOP and design pattern and solid understanding of
                                system architecture from lower level such as async-io, socket
                                to high level like design a scalable web app and cloud native.
                            </p>
                            <p>
                                I had experience in architecture design for large scale and enterprise application with SOA and cloud-based distribution system. I also have experiences about deep-learning, BI, data-warehouse.
                            </p>
                        </div>
                    </section>
                    <section className="skills-section section">
                        <h2 className="section-title"><span className="icon-holder"><i
                            className="fas fa-book"/></span>PERSONAL SKILLS</h2>
                        <div className="row">
                            I am an open mind, active, clever and friendly person.
                            I am a good understanding person and I can easy to work with different people in a different cultural environment.<br/>
                            I enjoy motivating individuals and organizations to learn, reflect and improve.
                            I like to solve difficult challenges and are known to keep calm during difficult and stressful situations.
                        </div>
                    </section>

                    <section className="skills-section section">
                        <h2 className="section-title"><span className="icon-holder"><i
                            className="fas fa-rocket"/></span>Technology SKILLS &amp; Proficiency</h2>
                        <div className="skillset row">
                            <div className="item col-12 col-md-6">
                                <h3 className="level-title text-nowrap">Web development</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" style={{'width': '80%'}}/>
                                    <div className="level-bar-text">4/5</div>
                                </div>
                            </div>
                            <div className="item col-12 col-md-6">
                                <h3 className="level-title text-nowrap">Software development</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" style={{'width': '80%'}}/>
                                    <div className="level-bar-text">4/5</div>
                                </div>
                            </div>
                            <div className="item col-12 col-md-6">
                                <h3 className="level-title text-nowrap">Insurance software development</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" style={{'width': '90%'}}/>
                                    <div className="level-bar-text">3/5</div>
                                </div>
                            </div>
                            <div className="item col-12 col-md-6">
                                <h3 className="level-title text-nowrap">Angular/AngularJs</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" style={{'width': '99%'}}/>
                                    <div className="level-bar-text">5/5</div>
                                </div>
                            </div>
                            <div className="item col-12 col-md-6">
                                <h3 className="level-title text-nowrap">Design pattern</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" style={{'width': '95%'}}/>
                                    <div className="level-bar-text">4.8/5</div>
                                </div>
                            </div>
                            <div className="item col-12 col-md-6">
                                <h3 className="level-title text-nowrap">DevOps/K8s/docker</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" style={{'width': '70%'}}/>
                                    <div className="level-bar-text">3.5/5</div>
                                </div>
                            </div>
                            <div className="item col-12 col-md-6">
                                <h3 className="level-title text-nowrap">MySQL</h3>
                                <div className="progress level-bar">
                                    <div className="progress-bar theme-progress-bar" style={{'width': '60%'}}/>
                                    <div className="level-bar-text">3/5</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section experiences-section">
                        <h2 className="section-title"><span className="icon-holder">
                            <i className="fas fa-briefcase"/></span>Experiences
                        </h2>
                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">Senior full-stack developer</h3>
                                    <div className="time">Noria AS | 2014 - Present</div>
                                </div>
                                <div className="company"><i className="fa fa-bookmark mr-1"/>Paris Web</div>
                            </div>
                            <div className="details text-justify">
                                <p>Paris Web is a part of the insurance system provide a set of modules:<br/>
                                    - Loadsure: <br/>
                                    This module provide the spot freight community with a full-service InsurTech. We
                                    build a platform that a new client can integrate with this platform very easy via
                                    REST api and javascript library.<br/>
                                    - Claim module:<br/>
                                    Claim Portal offers a number of sought-after features, such as digital documentation
                                    archives and email distribution for enhanced communication flow with clients and
                                    other claim stakeholders. The portal has been designed to offer a user friendly
                                    end-to-end workflow and can be accessed on any device through a web browser <br/>
                                    - Analyst module <br/>
                                    Analysis module allow the system extract data from Paris Core System and let
                                    end-user create Adhoc report base on the user demand. We use Enterprise Jasper
                                    Server as report server and VisualizeJs for our embedded report solution.
                                </p>
                                <p>
                                    In this project, I implement the skeleton of the application, integrate with BI
                                    tool, cover the most of the main problems from front-end to backend. Planning and
                                    provide suggestion solutions with team and clients.<br/><br/>
                                    <b>Success story: In production with more than 10 customer in Norwegian
                                        market.</b><br/>
                                    Technologies: Zend, AngularJs, Enterprise Service Bus (ESB), Web Service, K8s,
                                    Docker, Jasper ETL
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">Software Engineer</h3>
                                    <div className="time">Contemi | 2013 - 2014</div>
                                </div>
                                <div className="company"><i className="fa fa-bookmark mr-1"/>Lincoln</div>
                            </div>
                            <div className="details text-justify">
                                <p>
                                    Lincoln project provide the solutiont for Lincoln company (a brand of Ford) that
                                    allow customer to customize their faverite cars, control, book service for
                                    maintainent their cars. In this project we implement the web applications run in
                                    Kios machine, user just touch and choose the part of cars which they like and the
                                    application will show up the current state of this car by Unity.<br/>
                                    My duties in this project that create and maintain the main skeleton and the
                                    structure of front-end component. Emplement core feature such as: navigation,
                                    animation, bussiness workflow, interage with backend.
                                </p>
                                <p>
                                    Technologies: Grunt, AngularJs, CoffeeScipt, Unity, CSS3, Express, Animation.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">Software Engineer</h3>
                                    <div className="time">Contemi | 2012 - 2013</div>
                                </div>
                                <div className="company"><i className="fa fa-bookmark mr-1"/>SSDC</div>
                            </div>
                            <div className="details text-justify">
                                <p>
                                    SSDC provide the system help Singapore Safety Driving Cent manage the bussiness
                                    model. System allow student can register and book the lession online.
                                </p>
                                <p>
                                    Technologies: ASP.NET MVC4, Entity Framework, SOA
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">Developer</h3>
                                    <div className="time">Contemi | 2012-2012</div>
                                </div>
                                <div className="company"><i className="fa fa-bookmark mr-1"/>Employee benefit</div>
                            </div>
                            <div className="details text-justify">
                                <p>
                                    Employee benefit system provide benefit packages for company. Company staff
                                    available to register number of staffs of company, buy / adjust benefit packages for
                                    staffs.
                                    My main duties in this project that implement feature , write document, test and
                                    maintainent.
                                </p>
                                <p>
                                    Technologies: PHP, Memcache, Webservice, JqueryUI
                                </p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <footer className="footer">
                <div className="text-center">
                    Built with ❤ by Ricky Nguyen - {(new Date).getFullYear()}
                </div>
            </footer>
        </div>
    );
}
