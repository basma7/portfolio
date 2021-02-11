import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Loading from './components/Reusable/Loading';
import Portfolio from './components/Portfolio';

export default function Routing() {

  return (
    <Router>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path="/portfolio" component={Portfolio} />
        </Suspense>
      </Switch>
    </Router>
  );
}
