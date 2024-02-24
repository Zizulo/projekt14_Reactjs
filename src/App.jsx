import { tasks as tasksData } from './data/tasks';
import { useState } from 'react';
import './App.css';
import { TasksList } from './components/TasksList';
import {Player} from './components/Player';
import { Example } from './components/Example';

function App() {
  return (
    <div>
         {/* <TasksList/>
         <Player/> */}
      <Example/>  
    </div>
  );
}

export default App;
