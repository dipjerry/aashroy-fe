import React , { useState } from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch } from 'react-router-dom';
import GoalList from './goals/components/GoalList/GoalList';
import NewGoal from './goals/components/NewGoal/NewGoal';
import Users from './users/pages/Users';

import './App.css';

const App = () => {
  const [goal , setCourseGoal] = useState([
    {id: 'cg1', text: 'get degree'},
    {id: 'cg2', text: 'get job'},
  ])
  // const goal = ;
   const addNewGoalHandler = newGoal =>{ 
    // setCourseGoal(goal.concat(newGoal))
    setCourseGoal(goal => goal.concat(newGoal))
   }
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <div className="course-goals">
          <h2>Course Goals</h2>
          <NewGoal onAddGoal={addNewGoalHandler} />
          <GoalList goals={goal} />
        </div>
      </Route>
      <Route path="/users" exact>
        <Users/>       
      </Route>
      <Redirect to="/" />
      </Switch>
    </Router>
    
  );
};

export default App;
