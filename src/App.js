import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Classification from "./pages/classification/Classification";
import Plant from "./pages/plant/Plant";
import NewUser from "./pages/newUser/NewUser";
import NewClassification from "./pages/newClassification/NewClassification";
import NewPlant from "./pages/newPlant/NewPlant";
import UserList from "./pages/userList/UserList";
import ClassificationList from "./pages/classificationList/ClassificationList";
import PlantList from "./pages/plantList/PlantList";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import { Redirect } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        {user ? (
          <>
            <Topbar user={user} />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/plants">
                <PlantList />
              </Route>
              <Route path="/plant/:plantId">
                <Plant />
              </Route>
              <Route path="/newplant">
                <NewPlant />
              </Route>
              <Route path="/classifications">
                <ClassificationList />
              </Route>
              <Route path="/classification/:classificationId">
                <Classification />
              </Route>
              <Route path="/newclassification">
                <NewClassification />
              </Route>
            </div>
          </>
        ): <Redirect to="/login" />}
      </Switch>
    </Router>
  );
}

export default App;
