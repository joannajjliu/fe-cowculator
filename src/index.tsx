import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import DefaultHeader from './templates/DefaultHeader';
import HospitalRoom from './pages/HospitalRoom';
import Hospital from './pages/Hospital';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Settings from './pages/Settings';
import StickyFooter from './templates/StickyFooter';

import './styles/global.scss';

const baseLink = '/fe-stock-keeper-ai';

const DefaultContainer = () => (
  <div>
    <DefaultHeader />
    <section className="py-5 mt-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-10 col-md-8 mx-auto">
          <Route exact path={'/dashboard'}>
            <Dashboard />
          </Route>
          <Route exact path={'/hospital'}>
            <Hospital />
          </Route>
          <Route exact path={'/hospital-room'}>
            <HospitalRoom />
          </Route>
          <Route exact path={'/settings'}>
            <Settings />
          </Route>
          {/* TODO: add support for unmatching URL (404 page) 
        404 page keeps showing up currently not working */}
          {/* <Route path="*" exact={true}>
          <PageNotFound />
        </Route> */}
        </div>
      </div>
    </section>
    <StickyFooter />
  </div>
);

const App = () => (
  <Router>
    <div className="d-flex flex-column h-100 stock-keeper-global__body">
      <main className="mb-4">
        <Switch>
          <Route exact path={'/'}>
            <section className="py-5 mt-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-10 col-md-8 mx-auto">
                  <Login />
                </div>
              </div>
            </section>
          </Route>
          <Route component={DefaultContainer} />
        </Switch>
      </main>
    </div>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
