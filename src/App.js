import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/PreviewHomePage/Home';
import CaloriesPage from './components/Sections/Calories/Page/CaloriesPage';
import FunPage from './components/Sections/Fun/Page/FunPage';
import GoalsPage from './components/Sections/Goals/Page/GoalsPage';
import MoneyPage from './components/Sections/Money/Page/MoneyPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/calories" component={CaloriesPage} />
        <Route path="/fun" component={FunPage} />
        <Route path="/goals" component={GoalsPage} />
        <Route path="/money" component={MoneyPage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;