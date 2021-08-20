import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Welcome from "./components/Welcome";
import NoPresentation from "./components/NoPresentation";
import Signup from "./components/auth/Signup";
import EditNewFirst from "./components/EditNewFirst";

//user import

import { Routes } from "./Services/Routes/APP";

//component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes?.root} component={Welcome} />
        <Route exact path={Routes?.presentation} component={NoPresentation} />
        <Route exact path={Routes?.signup} component={Signup} />
        <Route exact path={Routes?.pptEdit} component={EditNewFirst} />
      </Switch>
    </Router>
  );
};

export default App;
