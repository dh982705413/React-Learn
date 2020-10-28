import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import NotFind from "../404";
import Todo from "../pages/Todo";
export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todo" component={Todo} />
        <Route component={NotFind} />
      </Switch>
    </HashRouter>
  );
}
