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
import CreateLogin from '../Pages/App/Login/CreateLogin';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewDragon />} />
        <Route path="/edit/:id" element={<NewDragon />} />
        <Route path="/view/:id" element={<ViewDragon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-login" element={<CreateLogin />} />
        <Route path="*" element={<Home />} />
        View
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
