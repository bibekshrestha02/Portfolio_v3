import React, { Suspense, lazy, useEffect, useState } from 'react';
import MainTempletes from './templetes/MainTempletes';
import LoadingComponent from './components/LoadingComponent';
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

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        await dispatch(initalCheck());
        await dispatch(initalFetchAction());
        setLoading(false);
      } catch (error) {
        console.log(error);
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
