import React , { useState } from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch } from 'react-router-dom';
import GoalList from './goals/components/GoalList/GoalList';
import NewGoal from './goals/components/NewGoal/NewGoal';
import Users from './users/pages/Users';
import Ngo from './ngo/pages/Ngo';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import './App.css';

const App = () => {
  const [goal , setCourseGoal] = useState([
    {id: 'cg1', text: 'Help the Homeless'},
    {id: 'cg2', text: 'Provide food and shelter'},
  ])
  // const goal = ;
   const addNewGoalHandler = newGoal =>{ 
    // setCourseGoal(goal.concat(newGoal))
    setCourseGoal(goal => goal.concat(newGoal))
   }
  return (
    <Router>
      <MainNavigation/>
        <main>
          <Switch>
            <Route path="/" exact>
              <div className="course-goals">
                <h2>Aim of the Project</h2>
                <NewGoal onAddGoal={addNewGoalHandler} />
                <GoalList goals={goal} />
              </div>
            </Route>
            <Route path="/users" exact>
            <h1>Users</h1>
              <Users/>       
            </Route>
            <Route path="/report_homeless" exact>   
              <h1>Report Homeless</h1>
            </Route>
            <Route path="/ngo" exact>
              <h1>NGO</h1>
              <Ngo/>
            </Route>
            <Route path="/crime" exact>
              <h1>Crime</h1>
            </Route>
            <Route path="/ways_to_help" exact>
              <h1>Ways to help</h1> 
            </Route>
          <Redirect to="/" />
          </Switch>
        </main>
    </Router>
    
  );
};

export default App;
