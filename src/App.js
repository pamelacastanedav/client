import "./App.css";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Main from "./components/Main";
import Create from "./components/Create";
import ShowOnw from "./components/ShowOne";

function App() {
  return (
    <div className="App">
      <h1>Notes!</h1>
      <Link to="/">Home</Link> &nbsp;&nbsp;
      <Link to="/notes/new">Create</Link>
      <Switch>
        <Route path="/notes/new">
          <Create />
        </Route>
        {/* <Route paht="/note/:id">
          <ShowOne />
        </Route> */}
        <Route path="/notes">
          <Main />
        </Route>

        {/* Main Route */}
        <Route path="/">
          <Redirect to="/notes" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
