import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import blog from './pages/blog'
import Services from './pages/services'
import Team from './pages/team';
import BackToTop from './layout/backToTop'
import leadership from './pages/leadership'
import corporate_membership_program from './pages/corporate-membership-program';
import b2cmembership from './pages/personal-membership-program'
import ourservice from './pages/ourservice'
import BlogDestails from './pages/blog-details';
import blog_Designv2 from './pages/blog-Designv2';
import b2c_page from './pages/b2c-page';
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

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={'#'}>
                <div class="page-wrapper">
                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/b2c-page' exact component={b2c_page} />
                        <Route path='/contact-us' exact component={contact} />
                        <Route path='/blog' component={blog} />
                        <Route path='/leadership' component={leadership} />
                        <Route path='/services-standalone' component={Services} />
                        <Route path='/team' component={Team} />
                        <Route path='/corporate-membership-program' component={corporate_membership_program}/>
                        <Route path='/blog-details' component={BlogDestails}/>
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
                    </Switch>
                    <BackToTop />
                </div>
            </BrowserRouter>
        )
    }
}
export default Router;