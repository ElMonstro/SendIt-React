import React from 'react';
import List from './List';
import Form from './Form';
import Header from './Header';
import { BrowserRouter as Router, Route,  } from 'react-router-dom'
import Home from './Home';

const App = () => (
  <Router>
    <div>
    <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/parcels" component={List} />
    <Route path="/create-parcel" component={Form}/>
  </div>
  </Router>
);

export default App;
