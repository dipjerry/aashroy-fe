import React, {useState, useCallback} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {BrowserRouter as Redirect, Switch} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import GoalList from './goals/components/GoalList/GoalList';
import NewGoal from './goals/components/NewGoal/NewGoal';
import Users from './users/pages/Users';
import Ngo from './ngo/pages/Ngo';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Homelesss from './homeless/pages/Homeless';
import UserPlace from './index/pages/UserPlaces';
import Profile from './users/pages/Profile';
import Donation from './donation/pages/Donation';
import AddDonation from './donation/pages/AddDonation';
// import CurrentLoc from './shared/components/UIelements/getCurrentLoc';
// import ChangeColor from './shared/components/UIelements/test';
import AddHomeless from './homeless/pages/AddHomeless';
import AddNgo from './ngo/pages/AddNgo';
import Auth from './users/pages/Auth';
import {AuthContext} from './shared/context/auth-context';
import './App.css';
// import Button from './shared/components/FormElements/Button';

const App = () => {
  const [goal, setCourseGoal] = useState([
    {id: 'cg1', text: 'Help the Homeless'},
    {id: 'cg2', text: 'Provide food and shelter'},
  ]);
  const addNewGoalHandler = (newGoal) =>{
    setCourseGoal((goal) => goal.concat(newGoal));
  };
  // authentication handler
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;


  if (isLoggedIn) {
    routes = (
      <Router>
        <MainNavigation/>
        <Switch>
          <Route path="/" exact>
            <UserPlace />
            <div className="course-goals">
              <NewGoal onAddGoal={addNewGoalHandler} />
              <h2>Aim of the Project</h2>
              <GoalList goals={goal} />
              <h1>Recently added Homeless peoples</h1>
              <Homelesss/>
              <h1>Top Volunteer</h1>
              <Users/>
              <Link to="/ngo"> <h1>Top NGO</h1></Link>
              <Ngo/>
            </div>
          </Route>
          <Route path="/users" exact>
            <h1>Users</h1>
            <Profile />
          </Route>
          <Route path="/Homeless" exact>
            <h1>Homeless peoples</h1>
            <AddHomeless
              type = "text"
              placeholder = "Your status"
              control = "input"
            />
            <Homelesss/>
          </Route>
          <Route path="/ngo" exact>
            <h1>NGO</h1>
            <AddNgo
              type = "text"
              placeholder = "Your status"
              control = "input"
            />
            <Ngo/>
          </Route>
          <Route path="/crime" exact>
            <h1>Crime</h1>
          </Route>
          <Route path="/ways_to_help" exact>
            <h1>Ways to help</h1>
            <AddDonation/>
            <Donation/>
          </Route>

          <Redirect to="/" />
        </Switch>

      </Router>
    );
  } else {
    routes = (
      <Router>
        <MainNavigation/>
        <Switch>
          <Route path="/" exact>
            <UserPlace />
            <div className="course-goals">
              <NewGoal onAddGoal={addNewGoalHandler} />
              <h2>Aim of the Project</h2>
              <GoalList goals={goal} />
              {/* <h1>Recently added Homeless peoples</h1> */}
              <Homelesss/>
              <h1>Top Volunteer</h1>
              <Users/>
              <Link to="/ngo"> <h1>Top NGO</h1></Link>
              <Ngo/>
            </div>
          </Route>
          <Route path="/Homeless" exact>
            <h1>Homeless peoples</h1>
            <AddHomeless
              type = "text"
              placeholder = "Your status"
              control = "input"
            />
            <Homelesss/>
          </Route>
          <Route path="/ngo" exact>
            <h1>NGO</h1>
            <AddNgo
              type = "text"
              placeholder = "Your status"
              control = "input"
            />
            <Ngo/>
          </Route>
          <Route path="/crime" exact>
            <h1>Crime</h1>
          </Route>
          <Route path="/ways_to_help" exact>
            <h1>Ways to help</h1>
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Redirect to="/auth" />
        </Switch>
      </Router>
    );
  }
  return (
    <AuthContext.Provider
      value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
