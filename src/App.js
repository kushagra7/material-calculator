import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Materials from './components/materials/Materials';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col-sm-4">col-sm-4</div>
            <div class="col-sm-8"><Materials /></div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
