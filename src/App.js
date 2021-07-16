import React, { Suspense, lazy, useEffect } from 'react';
import MainTempletes from './templetes/MainTempletes';
import LoadingComponent from './components/LoadingComponent';
import { useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { initalCheck } from './store/actions/authActions';
const AboutScreen = lazy(() => import('./screens/AboutScreen'));
const ContactScreen = lazy(() => import('./screens/ContactScreen'));
const EducationScreen = lazy(() => import('./screens/EducationScreen'));
const ProjectsScreen = lazy(() => import('./screens/ProjectsScreen'));
const SkillScreen = lazy(() => import('./screens/SkillScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initalCheck());
  }, [dispatch]);
  return (
    <Router>
      <MainTempletes>
        <Suspense fallback={<LoadingComponent />}>
          <Switch>
            <Route exact path='/' component={AboutScreen} />
            <Route path='/contacts' component={ContactScreen} />
            <Route path='/educations' component={EducationScreen} />
            <Route path='/projects' component={ProjectsScreen} />
            <Route path='/skills' component={SkillScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='*' component={AboutScreen} />
          </Switch>
        </Suspense>
      </MainTempletes>
    </Router>
  );
}
export default App;
