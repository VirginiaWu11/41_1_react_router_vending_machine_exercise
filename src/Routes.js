import { Route, Switch, Redirect } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import FreshSardines from "./FreshSardines";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path="/soda">
        <Soda />
      </Route>
      <Route exact path="/chips">
        <Chips />
      </Route>
      <Route exact path="/Freshsardines">
        <FreshSardines />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
