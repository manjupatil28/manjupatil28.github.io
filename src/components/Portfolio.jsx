// Portfolio.js

import React from "react";
import './portfolio.css'

function Portfolio() {
    return (
        <>

            <div className="portfolio-container">
                <h2>My Portfolio</h2>
                <div className="portfolio-content">
                    <div className="company-section">
                        <h3>Informatica Business Solutions</h3>
                        <h6>Bengaluru,Karnataka</h6>
                        <p>Technical Support Engineer</p>
                        <p>Duration: 1 year</p>
                        <p>Responsibilities:</p>
                        <ul>
                        <li>Developed a deep understanding of Informatica products, including their technical aspects and working through extensive
training and hands-on experience.</li>
                            <li>Helping customers with issues related to the Informatica product resulting in improved customer
                                satisfaction with a customer satisfaction score with an average of 4.5 out of 5.0.</li>
                            <li>Responded promptly to escalated high-priority issues, actively troubleshooting and providing quick and effective solutions.</li>
                            <li>Maintained a high level of accuracy and attention to detail when documenting and communicating issue resolutions to
                                customers and internal stakeholders.</li>
                            <li>Collaborated with cross-functional teams to diagnose and troubleshoot complex issues and provide timely resolutions to
                                ensure SLA compliance</li>
                        </ul>
                    </div>
                    <div className="company-section">
                        <h3>Hashout Software Technologies</h3>
                        <h6>Bengaluru,Karnataka</h6>
                        <p>Frontend Developer</p>
                        <p>Duration: 1.2 years</p>
                        <p>Responsibilities:</p>
                        <ul>
                        <li>Collaborated with a team of developers to design and implement MCA Forms and Citrix Docs projects at Hashout Software
Technologies.</li>
                            <li>Utilized HTML, CSS, Sass, Javascript, ReactJS,Redux and various JS frameworks to design and implement website UI and bug
fixes for Citrix Documentation Website.</li>
                            <li>Utilized Adobe experience manager to create visually appealing and user-friendly forms for MCA.</li>
                            <li>Conducted thorough testing and debugging of website features and functionality to ensure high quality and reliability.</li>
                            <li>Collaborated with team members and stakeholders to gather requirements, identify areas for improvement, and prioritize
                                tasks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Portfolio;
