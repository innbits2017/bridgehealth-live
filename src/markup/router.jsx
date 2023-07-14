import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import blog from './pages/blog'
import Team from './pages/team';
import BackToTop from './layout/backToTop'
import leadership from './pages/leadership'
import corporate_membership_program from './pages/corporate-membership-program';
import b2cmembership from './pages/personal-membership-program'
import ourservice from './pages/ourservice'
import blog_Designv2 from './pages/blog-Designv2';
import diet_and_nutrition from './pages/diet-and-nutrition';
import yoga_Assessment from './pages/yoga-Assessment';
import lab_tests from './pages/lab-tests';
import physiotherapy from './pages/physiotherapy';
import pharmacy from './pages/pharmacy';
import psychological_Health from './pages/psychological-Health';
import contact from './pages/contact-us';
import ophthalmologist from './pages/ophthalmologists';
import dermatology from './pages/dermatology'; 
import doctor_consults from './pages/doctor-consults';
import dental from './pages/dental';
import fitnessAssessment from './pages/fitness-assessment';
import nursingAtHome from './pages/nursing-at-home';
import comprehensiveHealth from './pages/comprehensive-health';
import elderlyCare from './pages/elderly-care';
import diabetes from './pages/diabetes';
import manageWeight from './pages/manage-weight';
import hypertension from './pages/hypertension';
import aboutUs from './pages/aboutus';
import Career from './pages/career';
import FAQ from './pages/faq-page';
import experienceCentre from './pages/experience-centre';
import affiliatePartners from './pages/affiliate-partners';
import HRA from './pages/hra-page';
import deviceAndTechnology from './pages/device-and-technology';
import mediaAndPR from './pages/media-and-pr';
import termsOfUse from './pages/terms-of-use';
import privacyPolicies from './pages/privacy-policies';
import HealthiskAssessment from'./pages/health-risk-assessment';
import FormComponent from './pages/career-form';
import careerAdmin from './pages/career-admin';
import JobDescription from './pages/JobDescription';
import LoginForm from './pages/LoginForm';
import JobListingForm from './pages/JobListingForm';
import Sidenav from './pages/Sidenav';
import TermPolicy from './pages/term-policy';



class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={'#'}>
                <div class="page-wrapper">
                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/contact-us' exact component={contact} />
                        <Route path='/blog' component={blog} />
                        <Route path='/leadership' component={leadership} />
                        <Route path='/team' component={Team} />
                        <Route path='/corporate-membership-program' component={corporate_membership_program}/>
                        <Route path='/career-form' component={FormComponent}/>
                        <Route path='/our-services' component={ourservice}/>
                        <Route path='/personal-membership-program' component={b2cmembership}/>
                        <Route path='/blog-design' component={blog_Designv2}/>
                        <Route path='/diet-and-nutrition' component={diet_and_nutrition}/>
                        <Route path='/yoga-assessment' component={yoga_Assessment}/>
                        <Route path='/lab-tests' component={lab_tests}/>
                        <Route path='/physio-therapy' component={physiotherapy}/>
                        <Route path='/pharmacy' component={pharmacy}/>
                        <Route path='/psychological-health' component={psychological_Health}/>
                        <Route path='/ophthalmologist' component={ophthalmologist}/>
                        <Route path='/dermatology' component={dermatology}/>
                        <Route path='/doctor-consults' component={doctor_consults}/>
                        <Route path='/dental-consults' component={dental}/>
                        <Route path='/fitness-assessment' component={fitnessAssessment}/>
                        <Route path='/nursing-at-home' component={nursingAtHome}/>
                        <Route path='/comprehensive-health-checks' component={comprehensiveHealth}/>
                        <Route path='/elderly-care' component={elderlyCare}/>
                        <Route path='/diabetes' component={diabetes}/>
                        <Route path='/manage-weight' component={manageWeight}/>
                        <Route path='/hyper-tension' component={hypertension}/>
                        <Route path='/about-us' component={aboutUs}/>
                        <Route path='/career' component={Career}/>
                        <Route path='/faq-page' component={FAQ}/>
                        <Route path='/experience-centre' component={experienceCentre}/>
                        <Route path='/affiliate-partners' component={affiliatePartners}/>
                        <Route path='/hra-page' component={HRA}/>
                        <Route path='/devices-and-technology' component={deviceAndTechnology}/>
                        <Route path='/media-and-pr' component={mediaAndPR}/>
                        <Route path='/terms-of-use' component={termsOfUse}/>
                        <Route path='/privacy-policy' component={privacyPolicies}/>
                        <Route path='/health-risk-assessment' component={HealthiskAssessment}/>
                        <Route path='/career-admin' component={careerAdmin}/>
                        <Route path='/job-description' component={JobDescription}/>
                        <Route path='/LoginForm' component={LoginForm}/>
                        <Route path='/sidenav' component={Sidenav}/>
                        <Route path='/JobListingForm' component={JobListingForm}/>
                        <Route path='/terms-policy' component={TermPolicy}/>
                        

                    </Switch>
                    <BackToTop />
                </div>
            </BrowserRouter>
        )
    }
}
export default Router;