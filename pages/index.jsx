import React from "react";

export default function Index() {
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar-wrapper">
                    <div className="profile-container">
                        <img className="profile rounded-circle"
                             src="https://s.gravatar.com/avatar/5a2181af432f7e87e8d505a17dd5254b?s=180" alt="https://rickynguyen.info"/>
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
                    </div>

                    <div className="languages-container container-block">
                        <h2 className="container-block-title">Languages</h2>
                        <ul className="list-unstyled interests-list">
                            <li>Vietnamese <span className="lang-desc">(Native)</span></li>
                            <li>English <span className="lang-desc">(Professional)</span></li>
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
                                I am a senior full-stack developer with <u>8 years experience</u> in web development
                                with
                                <em> not bad knowledge about my stack to from lower level like async-io, fpm workers
                                    up to high level such as OOP and Design Pattern</em>,
                                from improving the app performance to deploying this app into kubernetes cluster.
                            </p>
                            <p>
                                Even though I can create an easy-to-use JS-lib for improving the team workload or create
                                a modular application from scratch, I still believe that the hardest problem in this
                                area is “how to motivate yourself and people around”. So, <b>I am looking forward to
                                having
                                a change to resolve this problem with a long-term project</b>.
                            </p>
                            <p>I also have basic knowledge about deep-learning, BI, data-warehouse.</p>
                        </div>
                    </section>
                    <section className="skills-section section">
                        <h2 className="section-title"><span className="icon-holder"><i
                            className="fas fa-rocket"/></span>SKILLS &amp; Proficiency</h2>
                        <div className="skillset row">
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">Web development</h3>
                            </div>
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">JS/AngularJs</h3>
                            </div>
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">PHP/Zend</h3>
                            </div>
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">Design pattern</h3>
                            </div>
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">Python/Flask</h3>
                            </div>
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">Queue/Worker</h3>
                            </div>
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">K8s/docker/gke</h3>
                            </div>
                            <div className="item col-6 col-md-4">
                                <h3 className="level-title text-nowrap">MySQL</h3>
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
                                    <div className="time">2014 - Present</div>
                                </div>
                                <div className="company">Paris Web - Noria AS</div>
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
                                    <div className="time">2013 - 2014</div>
                                </div>
                                <div className="company">Lincoln</div>
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
                                    <div className="time">2012 - 2013</div>
                                </div>
                                <div className="company">SSDC</div>
                            </div>
                            <div className="details text-justify">
                                <p>
                                    SSDC provide the system help Singapore Safety Driving Cent manage the bussiness
                                    model. System allow student can register and book the lession online.
                                </p>
                                <p>
                                    Technologies: ASP.NET MVC4, Entity Framwork, SOA
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="meta">
                                <div className="upper-row">
                                    <h3 className="job-title">Developer</h3>
                                    <div className="time">2012</div>
                                </div>
                                <div className="company">Employee benefit</div>
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
                    Built with ❤ by Ricky Nguyen -  {(new Date).getFullYear()}
                </div>
            </footer>
        </div>
    );
}