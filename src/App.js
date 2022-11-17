// Required imports
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import NavBar from './components/Nav';
import aboutMe from './components/pages/aboutme';
import Projects from './components/pages/Projects';
// import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from './projects.json';
import NavBar from './components/Nav';


class App extends Component {
  state = {
    projects
  };

  render() {
    return (
      
        <Router basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={aboutMe} />
            <Route exact path="/portfolio" render={(props) => <Projects {...props} projects={this.state.projects} />} />
          </Switch>
          {/* <Footer /> */}
        </Router>
      
    );
  };
};

export default App;
