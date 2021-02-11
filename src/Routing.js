import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Loading from './components/Reusable/Loading';
import Portfolio from './components/Portfolio';
import Header from './components/Header'
export default function Routing() {

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Header />
          <Route path="/portfolio" component={Portfolio} />
        </Suspense>
      </Switch>
    </Router>
  );
}
