import React, { Suspense, lazy, useEffect, useState } from 'react';
import MainTempletes from './templetes/MainTempletes';
import LoadingComponent from './components/LoadingComponent';
import MainNetworkErrorComponent from './components/MainNetworkErrorComponent';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { initalCheck } from './store/actions/authActions';
import { initalFetchAction } from './store/actions/AdminActions';
import { useDispatch } from 'react-redux';
const AboutScreen = lazy(() => import('./screens/AboutScreen'));
const ContactScreen = lazy(() => import('./screens/ContactScreen'));
const EducationScreen = lazy(() => import('./screens/EducationScreen'));
const ProjectsScreen = lazy(() => import('./screens/ProjectsScreen'));
const SkillScreen = lazy(() => import('./screens/SkillScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
function App() {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        setError(false);
        await dispatch(initalCheck());
        await dispatch(initalFetchAction());
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    init();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <LoadingComponent />
      </div>
    );
  }
  if (!isLoading && isError) {
    return <MainNetworkErrorComponent />;
  }
  return (
    <Router>
      <MainTempletes>
        <Suspense fallback={<LoadingComponent />}>
          <Switch>
            <Route exact path='/Portfolio_v3/' component={AboutScreen} />
            <Route path='/Portfolio_v3/contacts' component={ContactScreen} />
            <Route
              path='/Portfolio_v3/educations'
              component={EducationScreen}
            />
            <Route path='/Portfolio_v3/projects' component={ProjectsScreen} />
            <Route path='/Portfolio_v3/skills' component={SkillScreen} />
            <Route path='/Portfolio_v3/login' component={LoginScreen} />
            <Route path='*' component={AboutScreen} />
          </Switch>
        </Suspense>
      </MainTempletes>
    </Router>
  );
}
export default App;
