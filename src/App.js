import React, { Component } from 'react';
import { Header } from './Components/Shared/Header/';
import { Footer } from './Components/Shared/Footer/';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AnimalsContainer from '../src/Components/Animals/contener';
import FruitVegContainer from '../src/Components/FruitVeg/contener';


class App extends Component {
  render() {
    return (
      <div className="App">   
        <Router>
          <div className='combine'>
            <Header />           
              <div className="main-wrap" id="main-wrap">
                <div className="wrapper" id="wrap">
                  <Switch>
                    <Route exact path={'/'} component={AnimalsContainer} />
                    <Route exact path={'/fruitveg'} component={FruitVegContainer} />
                  </Switch> 
                </div>
              </div>
              <Footer />            
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
