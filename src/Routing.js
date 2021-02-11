import React, { lazy } from 'react';
import { BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

const Portfolio = lazy(() => import('./components/Portfolio'));

export default function Routing() {

  return (
    <Router>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
    </Router>
  );
}
