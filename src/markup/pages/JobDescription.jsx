import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer'
const aboutbg = require('./../../assets/images/shape/car1.png');

const JobDescription = () => {
return (
<>
    <>
        <Header />
        {/*
        <!-- Page Banner Section --> */}
        <section class="page-banner">
            <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
            <div class="bottom-rotten-curve alternate"></div>
        </section>
        <div class="auto-container  ">
            <div class=" text-center">
                <h2 className='fontSize'>
                </h2>
            </div>
        </div>

        <div className="container">
            <h2 className=' fontSize text-center'>
                <span className='headeingcolorblue'> Job </span>
                <span className='headeingcolorblack'> Description </span>
            </h2>

            <div className="row">
                <div className="col-lg-8">
                    <h3>Staff Nurse</h3>
                    <p className="text-muted">Bridge Health</p>
                    <hr />
                    <h4>Job Description</h4>
                    <h5>1. ROLES AND RESPONSIBILITIES OF THE ROLE </h5>
                    <div>
                        <ul className="job-desc">
                            <li>Executive member of the clinical care program roll out team </li>
                            <li>Restores and promotes patients health by completing the nursing process.</li>
                            <li>Collaborates with physicians and multidisciplinary team members.</li>
                            <li>Provides physical and psychological support to patients, friends, and families.</li>
                            <li>Identifies patient care requirements by establishing personal rapport with patients and
                                their families.</li>
                            <li>Establishes a compassionate environment by providing emotional, psychological, and
                                spiritual support to patients, friends, and families.</li>
                            <li>Assures quality of care by adhering to therapeutic standards, measuring health outcomes
                                against patient care goals and hospital or regulatory standards.</li>
                            <li>Resolves patient problems and needs by utilizing multidisciplinary team strategies.</li>
                            <li>Maintains safe and clean working environment by complying with procedures, rules, and
                                regulations.</li>
                            <li>Protects patients and employees by adhering to infection-control policies and protocols;
                                medication administration and storage procedures; and controlled substance regulations.
                            </li>
                            <li>Documents patient care services by charting in patient and department records.</li>
                            <li>Maintains continuity among nursing teams by documenting and communicating actions,
                                irregularities, and continuing needs.</li>
                            <li>Maintains patient confidence and protects operations by keeping information
                                confidential.</li>
                            <li>Ensures operation of equipment by completing preventive maintenance requirements;
                                calling for repairs; and evaluating new equipment and techniques.</li>
                            <li>Maintains nursing supplies inventory by checking stock to determine inventory level.
                            </li>
                            <li>Maintains professional and technical knowledge by attending educational workshops and
                                participating in professional societies.</li>
                            <li>Maintains a cooperative relationship among health care teams by communicating
                                information and participating in team problem-solving methods.</li>
                            <li>To be a part of the team which conducts onsite health screenings and at home.</li>
                            <li>Contributes to team effort by accomplishing related results as needed.</li>

                        </ul>
                    </div>
                    <h5>2. Desired Expertise & Experience:</h5>
                    <div>
                        <ul className="job-desc">
                            <li>Relevant experience of working in hospital, medical center, etc.</li>
                            <li>Exposure on handling corporate clientele.</li>
                            <li>2+ years experience.</li>
                            <li>Exposure to preventive care processes.</li>
                            <li>Experience in handling onsite programs / Home Care.</li>
                            <li>Experience in chronic health conditions.</li>
                            <li>Exposure in handling various medical devices, equipment, bed side monitors.</li>
                        </ul>
                    </div>
                    <h5>3. DESIRED EDUCATIONAL QUALIFICATIONS DESIRED</h5>
                    <div>
                        <ul className="job-desc">
                            <li>Midwifery, GNM, BSc. Nursing, Diploma</li>
                            <li>Active applicable state license</li>
                            <li>Other equivalent degree or diploma level certifications</li>
                        </ul>
                    </div>
                    <h5>4. PREFERRED SKILLS</h5>
                    <div>
                        <ul className="job-desc">
                            <li>Can Communicate in multiple languages (English, Hindi, Kannada)</li>
                            <li>Familiarity with digitally driven healthcare processes</li>
                            <li>Clinical skills</li>
                            <li>Bedside manner</li>
                            <li>Infection control</li>
                            <li>Physiological knowledge</li>
                            <li>Administering medication</li>
                            <li>Medical teamwork</li>
                            <li>Multitasking, listening, and verbal communication</li>
                            <li>Health promotion and maintenance</li>
                        </ul>
                    </div>
                    <div>
                        <h5>ADDITIONAL NOTES IF ANY</h5>
                        <p>
                            <strong> For example</strong> The expected incumbent should have exceptional communication
                            skills and ability to derive decisions to present at CEO level. It is also expected that,
                            he/she shall deal with diverse cultures & business segments.
                            Hence, he/she needs to be comfortable with varying expectations of different stakeholders.
                        </p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h4>Job Details</h4>
                    <ul className="list-unstyled">
                        <li><strong>Location:</strong> Bangalore, India</li>
                        <li><strong>Contract Type:</strong> Full-time</li>
                        <li><strong>Posted:</strong> June 16, 2023</li>
                    </ul>
                    <a href="/career-form"> <button class=" submitcontact" type="submit" name="submit-form">Apply
                            Now</button></a>

                </div>
            </div>
        </div>
    </>
    <Footer />
</>
);
};

export default JobDescription;