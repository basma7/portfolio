import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Loading from './components/Reusable/Loading';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Header from './components/Header'
export default function Routing() {

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Header />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Suspense>
      </Switch>
    </Router>
  );
}
