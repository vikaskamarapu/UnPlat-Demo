import React from 'react';
import './App.css';
import TodoBox from './components/TodoBox';
import { useSelector } from 'react-redux'
import { selectDoneList, selectInProgList, selectTodoList } from './features/todoSlice'


function App() {
  const todoList = useSelector(selectTodoList);

  const inProgList = useSelector(selectInProgList);

  const doneList = useSelector(selectDoneList);
  return (
    <div className="app">
      <div className='app-container'>
        <TodoBox title={"ToDo List"} currentList={todoList} />
        <TodoBox title={"In Progress"} currentList={inProgList} />
        <TodoBox title={"Done"} currentList={doneList} />
      </div>
    </div>
  );
}

export default App;
