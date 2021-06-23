import React from 'react';
import MainTempletes from './templetes/MainTempletes';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ColorsReducer from './store/reducers/ColorsReducer';
function App() {
  const reducers = combineReducers({
    colors: ColorsReducer,
  });
  const store = createStore(reducers, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <MainTempletes />
    </Provider>
  );
}
export default App;
