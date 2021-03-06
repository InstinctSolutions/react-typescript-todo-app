import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';

const AppRouter: React.FC = () => {

  return (
      <BrowserRouter>
          <Switch>
              <Route path='/' component={Main}/>
          </Switch>
      </BrowserRouter>
  )
}

export default AppRouter;