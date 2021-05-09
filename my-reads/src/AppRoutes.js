import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import { createHashHistory } from 'history';
import DisplayPage from './pages/DisplayPage';
import SearchPage from './pages/SearchPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/MyReads/" component={DisplayPage} />
        <Route path="/MyReads/search" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
