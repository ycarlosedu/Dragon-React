import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import Home from '../Pages/App/Home';
import NewDragon from '../Pages/Dragons/New';
import ViewDragon from '../Pages/Dragons/View';
import Login from '../Pages/App/Login';
// import CreateLogin from '../Pages/App/Login/CreateLogin';
import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/new"
          element={
            <PrivateRoute>
              <NewDragon />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <NewDragon />
            </PrivateRoute>
          }
        />
        <Route
          path="/view/:id"
          element={
            <PrivateRoute>
              <ViewDragon />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute inverse={true}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path="/login/:params"
          element={
            <PrivateRoute inverse={true}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Switch>
    </Router>
  );
};

class RoutesPaths {
  static login = '/login';
  static register = '/register';
  static completedRegister = '/completed-register';
  static home = '/home';
  static newDragon = '/dragon-add';
  static editDragon = '/dragon-edit';
  static viewDragon = '/dragon-detail';
  static notFound = '*';
}
export { RoutesPaths };

export default Routes;
