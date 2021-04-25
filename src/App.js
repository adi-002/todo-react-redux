import './App.css';
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import TodayTask from "./Components/TodayTask";
import PendingTask from "./Components/PendingTasks";
import Navbar from "./Components/Navbar";
import Abandon from "./Components/Abandon";
import Completed from "./Components/Completed";
import InProgress from "./Components/InProgress";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={TodayTask} />
          <Route exact path="/pending" component={PendingTask} />
          <Route exact path="/completed" component={Completed} />
          <Route exact path="/inprogress" component={InProgress} />
          <Route exact path="/abondon" component={Abandon} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
