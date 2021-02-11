import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './PrivateRoute';
import './index.scss';
import Loading from './components/reusable/loading/Loading';
import ErrorBoundary from './components/reusable/Errors/ErrorBoundary';

const Portfolio = lazy(() => import('./components/Portfolio'));

export default function Routing() {

  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route path="/portfolio" component={Portfolio} />
          </Suspense>
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}
