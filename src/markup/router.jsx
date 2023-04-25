import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import blog from './pages/blog'
import Services from './pages/services'
import Team from './pages/team';
import BackToTop from './layout/backToTop'
import leadership from './pages/leadership'
import b2b from './pages/b2b'
import b2cmembership from './pages/b2cmembership'
import ourservice from './pages/ourservice'
import BlogDestails from './pages/blog-details';
import blog_Designv2 from './pages/blog-Designv2';
import b2c_page from './pages/b2c-page';
import diet_and_nutrition from './pages/diet-and-nutrition';

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={'/demo/fianandox/'}>
            {/* <BrowserRouter> */}
                <div class="page-wrapper">

                    <Switch>
                        <Route path='/' exact component={Index} />
                        <Route path='/b2c-page' exact component={b2c_page} />
                        <Route path='/blog' component={blog} />
                        <Route path='/leadership' component={leadership} />
                        <Route path='/services-standalone' component={Services} />
                        <Route path='/team' component={Team} />
                        <Route path='/leadership' component={leadership} />
                        <Route path='/b2b' component={b2b}/>
                        <Route path='/BlogDestails' component={BlogDestails}/>
                        <Route path='/ourservice' component={ourservice}/>
                        <Route path='/b2cmembership' component={b2cmembership}/>
                        <Route path='/blog-Designv2' component={blog_Designv2}/>
                        <Route path='/diet-and-nutrition' component={diet_and_nutrition}/>

                    </Switch>

                    <BackToTop />

                </div>
            </BrowserRouter>

        )
    }
}

export default Router;