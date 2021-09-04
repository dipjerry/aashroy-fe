import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  const goal = [
    {id: 'cg2', text: 'get degree'},
    {id: 'cg3', text: 'get job'},
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList goals={goal} />
    </div>
  );
};

export default App;
