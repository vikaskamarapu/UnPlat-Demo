import React from 'react';
import './App.css';
import TodoBox from './components/TodoBox';
import { useTodoListQuery } from './services/todoservice'
import { useInProgListQuery } from './services/InProgressService'
import { useDoneListQuery } from './services/DoneService';


function App() {
  const todoList = useTodoListQuery();
  const inProgList = useInProgListQuery();
  const doneList = useDoneListQuery();
  return (
    <div className="app">
      <div className='app-container'>
        {todoList.error ? (
          <>{todoList.error.error}</>
        ) : todoList.isLoading ? (
          <>Loading...</>
        ) : todoList.data ? (
          <div>
            <TodoBox title={"ToDo List"} currentList={todoList.data} />
          </div>
        ) : null}

        {inProgList.error ? (
          <>{inProgList.error.error}</>
        ) : inProgList.isLoading ? (
          <>Loading...</>
        ) : inProgList.data ? (
          <div>
                <TodoBox title={"In Progress"} currentList={inProgList.data} />
          </div>
        ) : null}

        {doneList.error ? (
          <>{doneList.error.error}</>
        ) : doneList.isLoading ? (
          <>Loading...</>
        ) : doneList.data ? (
          <div>
            <TodoBox title={"Done"} currentList={doneList.data} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
