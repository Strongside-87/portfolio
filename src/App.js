import React from 'react';
import Header from './components/Header';
/*
import AboutPage from './AboutPage';
import WorkPage from './WorkPage';
import BlogPage from './BlogPage';
import ContactForm from './ContactForm';
 */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/work">
              <WorkPage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
            <Route path="/">
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </Router>
  );
};

export default App;
