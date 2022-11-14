import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from 'react-router-dom'
import { Counter } from './features/counter/Counter';
import { PostsList } from './features/posts/postsList'
import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className='app'>
        <Switch>
          <Route 
            exact
            path='/'
            render={() => {
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            }}
          />
          <Redirect to="/" />
        </Switch>
      </div>
       {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
        </header>
      </div> */}
    </Router>
   
  );
}

export default App;
