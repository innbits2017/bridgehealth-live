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

class Router extends Component {
    render() {
        return (
            <BrowserRouter basename={'/demo/fianandox/'}>
            {/* <BrowserRouter> */}
                <div class="page-wrapper">

                    <Switch>
                        <Route path='/' exact component={Index} />
                       
                        <Route path='/blog' component={blog} />
                        <Route path='/leadership' component={leadership} />
                        <Route path='/services-standalone' component={Services} />
                        <Route path='/team' component={Team} />
                        <Route path='/leadership' component={leadership} />
                        <Route path='/b2b' component={b2b}/>
                        <Route path='/ourservice' component={ourservice}/>
                        <Route path='/b2cmembership' component={b2cmembership}/>

                    </Switch>

                    <BackToTop />

                </div>
            </BrowserRouter>

        )
    }
}

export default Router;