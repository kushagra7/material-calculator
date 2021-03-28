import React from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Materials from './components/materials/Materials';
import AddMaterial from './components/materials/AddMaterial';
import EditMaterial from "./components/materials/EditMaterial";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div class="container">
            <div class="row">
              <div class="col-sm-8"><Materials /></div>
              <div class="col-sm-4"><AddMaterial/></div>
            </div>
            <div class='row'>
              <Switch>
                <Route exact path='/contacts/edit/:id' component={EditMaterial} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
