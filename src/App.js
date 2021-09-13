import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter as Redirect, Switch} from 'react-router-dom';
import GoalList from './goals/components/GoalList/GoalList';
import NewGoal from './goals/components/NewGoal/NewGoal';
import Users from './users/pages/Users';
import Ngo from './ngo/pages/Ngo';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Homelesss from './homeless/pages/Homeless';
import UserPlace from './index/pages/UserPlaces';
import CurrentLoc from './shared/components/UIelements/getCurrentLoc';
import ChangeColor from './shared/components/UIelements/test';
import AddHomeless from './homeless/pages/AddHomeless';
import AddNgo from './ngo/pages/AddNgo';
import './App.css';

const App = () => {
  const [goal, setCourseGoal] = useState([
    {id: 'cg1', text: 'Help the Homeless'},
    {id: 'cg2', text: 'Provide food and shelter'},
  ]);
  // const [locations , setlocations] = useState([
  //   {id: 'cg1', locations: {lat: 40 , lng : -73}},
  //   {id: 'cg2', text: 'Provide food and shelter'},
  // ])
  // const goal = ;
  const addNewGoalHandler = (newGoal) =>{
    // setCourseGoal(goal.concat(newGoal))
    setCourseGoal((goal) => goal.concat(newGoal));
  };
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Switch>
          <Route path="/" exact>
            <UserPlace />
            <div className="course-goals">
              <NewGoal onAddGoal={addNewGoalHandler} />
              <h2>Aim of the Project</h2>

              <GoalList goals={goal} />
              <h1>Recently added Homeless peoples</h1>
              <Homelesss/>
              <h1>Top Users</h1>
              <Users/>
            </div>
          </Route>
          <Route path="/users" exact>
            <h1>Users</h1>
            <Users/>
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
          <Route path="/current" exact>
            <h1>Current Location</h1>
            <CurrentLoc />
          </Route>
          <Route path="/color" exact>
            <h1>Current Location</h1>
            <ChangeColor />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>

  );
};

export default App;
