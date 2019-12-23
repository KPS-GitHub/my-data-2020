import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/PreviewHomePage/Home';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;