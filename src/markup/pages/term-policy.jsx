import React, { Component } from 'react';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Tab, Tabs } from 'react-bootstrap';
import termsOfUse from './terms-of-use';
import privacyPolicies from './privacy-policies';

const aboutbg = require('./../../assets/images/shape/comming.png');


class TermPolicy extends Component {

    render() {
        return (
            <>
                <Header />

                {/* <!-- Page Banner Section --> */}
                <section class="page-banner commimgsoon">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>
                </section>

                <section>
                    <div>
                        <div>
                            <Tabs defaultActiveKey="Terms-Policy" id="uncontrolled-tab-example" className="mb-4">
                                <Tab eventKey="Terms" title="TERMS & CONDATIONS">
                                    <section class="contact-section term-policy">
                                        <div>
                                            <h4>Welcome to Who We Are - Bridge Health Medical and Digital Solutions!</h4>
                                            <p>
                                                These terms and conditions outline the rules and regulations for the use of Bridge Medical and Digital Solutions Private Limited's Website, located at https://www.bridgehealthgroup.com/. <br></br><br></br>

                                                By accessing this website we assume you accept these terms and conditions. Do not continue to use Who We Are - Bridge Health Medical and Digital Solutions if you do not agree to take all of the terms and conditions stated on this page. <br></br><br></br>

                                                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions.
                                                "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process
                                                of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands.
                                                Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.

                                            </p>
                                        </div>
                                        <div>
                                            <h4>COOKIES</h4>
                                            <p>
                                                We employ the use of cookies. By accessing Who We Are - Bridge Health Medical and Digital Solutions, you agreed to use cookies in agreement with the Bridge Medical and Digital Solutions Private Limited's Privacy Policy. <br></br><br></br>

                                                Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

                                            </p>
                                        </div>
                                        <div>
                                            <h4>LICENSE</h4>

                                            <p>
                                                Unless otherwise stated, Bridge Medical and Digital Solutions Private Limited and/or its licensors own the intellectual property rights for all material on Who We Are - Bridge Health Medical and Digital Solutions.
                                                All intellectual property rights are reserved. You may access this from Who We Are - Bridge Health Medical and Digital Solutions for your own personal use subjected to restrictions set in these terms and conditions.
                                            </p>

                                            <p>
                                                You must not:
                                                <ul>
                                                    <li>Republish material from Who We Are - Bridge Health Medical and Digital Solutions</li>
                                                    <li>Sell, rent or sub-license material from Who We Are - Bridge Health Medical and Digital Solutions</li>
                                                    <li>Reproduce, duplicate or copy material from Who We Are - Bridge Health Medical and Digital Solutions</li>
                                                    <li>Redistribute content from Who We Are - Bridge Health Medical and Digital Solutions</li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div>
                                            <p>This Agreement shall begin on the date hereof.</p> <br></br>

                                            <p>
                                                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Bridge Medical and Digital Solutions Private Limited does not filter, edit,
                                                publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Bridge Medical and Digital Solutions Private Limited,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions.
                                                To the extent permitted by applicable laws, Bridge Medical and Digital Solutions Private Limited shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

                                            </p>

                                            <br></br>

                                            <p>
                                                Bridge Medical and Digital Solutions Private Limited reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                                            </p>

                                            <p>
                                                You warrant and represent that:
                                                <ul>
                                                    <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                                                    <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                                                    <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                                                    <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                                                </ul>
                                            </p>

                                            <br></br>

                                            <p>
                                                You hereby grant Bridge Medical and Digital Solutions Private Limited a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                                            </p>
                                        </div>

                                        <div>
                                            <h4> HYPERLINKING TO OUR CONTENT</h4>
                                            <p>
                                                The following organizations may link to our Website without prior written approval:
                                            </p>
                                            <ul>
                                                <li>Government agencies;</li>
                                                <li>Search engines;</li>
                                                <li>News organizations;</li>
                                                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses;</li>
                                                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                                            </ul>

                                            <p>
                                                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship,
                                                endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
                                            </p>

                                            <br></br>

                                            <p>
                                                We may consider and approve other link requests from the following types of organizations:

                                                <ul>
                                                    <li>commonly-known consumer and/or business information sources;</li>
                                                    <li>dot.com community sites;</li>
                                                    <li>associations or other groups representing charities;</li>
                                                    <li>online directory distributors;</li>
                                                    <li>internet portals;</li>
                                                    <li>accounting, law and consulting firms; and</li>
                                                    <li>educational institutions and trade associations.</li>
                                                </ul>
                                            </p>

                                            <p>
                                                We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses;
                                                (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Bridge Medical and Digital Solutions Private Limited; and (d) the link is in the context of general resource information.
                                            </p>

                                            <br></br>

                                            <p>
                                                These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship,
                                                endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
                                            </p>

                                            <br></br>

                                            <p>
                                                If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to
                                                Bridge Medical and Digital Solutions Private Limited. Please include your name, your organization name, contact information as well as the URL of your site,
                                                a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                                            </p>


                                            <p>
                                                Approved organizations may hyperlink to our Website as follows:
                                                <ul>
                                                    <li>By use of our corporate name; or</li>
                                                    <li>By use of the uniform resource locator being linked to; or</li>
                                                    <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                                                </ul>
                                                No use of Bridge Medical and Digital Solutions Private Limited's logo or other artwork will be allowed for linking absent a trademark license agreement.
                                            </p>
                                        </div>
                                        <div>
                                            <h4> IFRAMES</h4>
                                            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
                                        </div>

                                        <div>
                                            <h4> CONTENT LIABILITY</h4>
                                            <p>
                                                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
                                                No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                                            </p>
                                        </div>
                                        <div>
                                            <h4>YOUR PRIVACY</h4>
                                            <p>Please read Privacy Policy</p>
                                        </div>
                                        <div>
                                            <h4> RESERVATION OF RIGHTS</h4>
                                            <p>
                                                We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.
                                                We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                                            </p>
                                        </div>

                                        <div>
                                            <h4>REMOVAL OF LINKS FROM OUR WEBSITE</h4>
                                            <p>
                                                If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment.
                                                We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                                            </p>
                                            <br></br>
                                            <p>
                                                We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the
                                                website remains available or that the material on the website is kept up to date.
                                            </p>
                                        </div>
                                        <div>
                                            <h4> DESCLAIMER</h4>
                                            <p>
                                                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                                                <ul>
                                                    <li>limit or exclude our or your liability for death or personal injury;</li>
                                                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                                                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                                                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                                                </ul>
                                                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph;
                                                and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.

                                                <br></br><br></br>

                                                As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                                            </p>
                                        </div>
                                    </section>
                                </Tab>

                                <Tab eventKey="Privacy" title="PRIVACY POLICY">
                                    <section class="contact-section term-policy" >
                                        <div>
                                            <h4>Privacy Policy</h4>

                                            <p> Last updated: May 2023 </p>

                                            <p>
                                                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                                                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                                            </p>

                                        </div>

                                        <div>
                                            <h2>Interpretation and Definitions</h2>

                                            <h3>Interpretation</h3>
                                            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                                            <h3>Definitions</h3>
                                            <p>For the purposes of this Privacy Policy:</p>
                                            <ul>
                                                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                                                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Bridge Health Medical and Digital Solutions Private Limited, No.166-167, 21st Main Road, 100 Feet Ring Road, 2nd Phase, JP Nagar, Bangalore - 560078.</li>
                                                <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device, or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                                                <li><strong>Country</strong> refers to: Karnataka, India.</li>
                                                <li><strong>Device</strong> means any device that can access the Service, such as a computer, a cellphone, or a digital tablet.</li>
                                                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                                                <li><strong>Service</strong> refers to the Website.</li>
                                                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service, or to assist the Company in analyzing how the Service is used.</li>
                                                <li><strong>Third-party Social Media Service</strong> refers to any website or any social network website through which a User can log in or create an account to use the Service.</li>
                                                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                                                <li><strong>Website</strong> refers to Who We Are - Bridge Health Medical and Digital Solutions, accessible from <a href="https://www.bridgehealthgroup.com/">https://www.bridgehealthgroup.com/</a>.</li>
                                                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                            </ul>

                                        </div>

                                        <div>
                                            <h2>Types of Data Collected</h2>

                                            <h3>Personal Data</h3>
                                            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                                            <ul>
                                                <li>Email address</li>
                                                <li>First name and last name</li>
                                                <li>Phone number</li>
                                                <li>Address, State, Province, ZIP/Postal code, City</li>
                                                <li>Bank account information in order to pay for products and/or services within the Service</li>
                                            </ul>

                                            <h3>Usage Data</h3>
                                            <p>Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                                            <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                                            <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>

                                            <h3>Information from Third-Party Social Media Services</h3>
                                            <p>The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:</p>
                                            <ul>
                                                <li>Google</li>
                                                <li>Facebook</li>
                                                <li>Twitter</li>
                                                <li>Instagram</li>
                                            </ul>
                                            <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service's account, such as Your name, Your email address, Your activities or Your contact list associated with that account.</p>
                                            <p>You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>

                                            <h3>Tracking Technologies and Cookies</h3>
                                            <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>
                                            <ul>
                                                <li>Cookies or Browser Cookies. A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                                                <li>Flash Cookies. Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies.</li>
                                                <li>Web Beacons. Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics.</li>
                                            </ul>

                                            <h2>Use of Your Personal Data</h2>

                                            <p>The Company may use Personal Data for the following purposes:</p>
                                            <ul>
                                                <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                                                <li>To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                                                <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                                                <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                                                <li>To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                                                <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                                                <li>For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                                                <li>For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing, and your experience.</li>
                                            </ul>

                                            <h2>Sharing of Your Personal Data</h2>

                                            <p>The Company may share Your personal information in the following situations:</p>
                                            <ul>
                                                <li>With Service Providers: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, for payment processing, and to contact You.</li>
                                                <li>For business transfers: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                                                <li>With Affiliates: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                                                <li>With business partners: We may share Your information with Our business partners to offer You certain products, services, or promotions.</li>
                                                <li>With other users: when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures, and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You, and view Your profile.</li>
                                                <li>With Your consent: We may disclose Your personal information for any other purpose with Your consent.</li>
                                            </ul>
                                            <h2>Retention of Your Personal Data</h2>
                                            <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.</p>
                                            <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
                                            <h2>Transfer of Your Personal Data</h2>
                                            <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
                                            <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
                                            <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy, and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
                                            <h2>Disclosure of Your Personal Data</h2>
                                            <h3>Business Transactions</h3>
                                            <p>If the Company is involved in a merger, acquisition, or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
                                            <h3>Law enforcement</h3>
                                            <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
                                            <h3>Other legal requirements</h3>
                                            <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                                            <ul>
                                                <li>Comply with a legal obligation</li>
                                                <li>Protect and defend the rights or property of the Company</li>
                                                <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                                                <li>Protect the personal safety of Users of the Service or the public</li>
                                                <li>Protect against legal liability</li>
                                            </ul>
                                            <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
                                            <h2>Detailed Information on the Processing of Your Personal Data</h2>
                                            <p>The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process, and transfer information about Your activity on Our Service in accordance with their Privacy Policies.</p>
                                            <h3>Payments</h3>
                                            <p>We may provide paid products and/or services within the Service. In that case, we may use third-party services for payment processing (e.g. payment processors).</p>
                                            <p>We will not store or collect Your payment card details. That information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council.</p>
                                            <p>Google Play In-App Payments: <a href="https://www.google.com/policies/privacy/">https://www.google.com/policies/privacy/</a></p>
                                            <p>When You use Our Service to pay for a product and/or service via bank transfer, We may ask You to provide information to facilitate this transaction and to verify Your identity.</p>
                                            <h3>Usage, Performance, and Miscellaneous</h3>
                                            <p>We may use third-party Service Providers to provide better improvement of our Service.</p>
                                            <p>Invisible reCAPTCHA: We use an invisible captcha service named reCAPTCHA operated by Google. The reCAPTCHA service may collect information from You and from Your Device for security purposes. The information gathered by reCAPTCHA is held in accordance with the Privacy Policy of Google: <a href="https://www.google.com/intl/en/policies/privacy/">https://www.google.com/intl/en/policies/privacy/</a></p>
                                            <h2>Links to Other Websites</h2>
                                            <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third-party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                                            <p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
                                            <h2>Changes to this Privacy Policy</h2>
                                            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                                            <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                                            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                                            <h2>Contact Us</h2>
                                            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                                            <ul>
                                                <li>By email: <a href="mailto:info@bridgehealthgroup.com">info@bridgehealthgroup.com</a></li>
                                                <li>By visiting this page on our website: <a href="https://www.bridgehealthgroup.com/">https://www.bridgehealthgroup.com/</a></li>
                                            </ul>
                                        </div>
                                    </section>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>

                </section>


                <Footer />
            </>
        )
    }


}

export default TermPolicy;
