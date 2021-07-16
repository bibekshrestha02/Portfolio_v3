import React, { Suspense, lazy } from 'react';
import MainTempletes from './templetes/MainTempletes';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ColorsReducer from './store/reducers/ColorsReducer';
import AdminReducer from './store/reducers/AdminReducer';
import LoadingComponent from './components/LoadingComponent';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
const AboutScreen = lazy(() => import('./screens/AboutScreen'));
const ContactScreen = lazy(() => import('./screens/ContactScreen'));
const EducationScreen = lazy(() => import('./screens/EducationScreen'));
const ProjectsScreen = lazy(() => import('./screens/ProjectsScreen'));
const SkillScreen = lazy(() => import('./screens/SkillScreen'));
const LoginScreen = lazy(() => import('./screens/LoginScreen'));
function App() {
  const reducers = combineReducers({
    colors: ColorsReducer,
    admin: AdminReducer,
  });
  const store = createStore(reducers, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
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
    </Provider>
  );
}
export default App;
