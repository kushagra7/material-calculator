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
        <div className="App text-white">
          <div class="container">
            <div class="row">
              <div class="col"> <h1> Materials</h1><br/></div>
            </div>
            <div class="row">
              <div class="col-4"><Materials /></div>
              <div class="col-8"><AddMaterial /></div>
            </div>
            <div class='row'>
              <div class="col-sm-5">
                <Switch>
                  <Route exact path='/materials/edit/:id' component={EditMaterial} />
                </Switch>
                <br/>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
