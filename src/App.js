import React from 'react';
import "./App.css";

// Before Converting to HOC
// import TodosList from './components/todosList';
// import UsersList from './components/usersList';

// After Converting to HOC
import SearchUsers from './components/usersList';
import SearchTodos from './components/todosList';

function App() {
  return (
      <React.Fragment>
        <div className='container'>
          <SearchUsers/>
          <SearchTodos/>        
        </div>
      </React.Fragment>   
  );
}


export default App;
