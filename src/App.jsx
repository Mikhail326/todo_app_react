import s from './App.module.css';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './components/AddTodo/AddTodo';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { TodoList } from './components/TodoList/TodoList';
import { deleteDataAPI, getDataAPI, putDataAPI } from './api';
import { CompletedTodo } from './components/ComletedTodo/CompletedTodo';

const App = () => {

  const [todo, setTodo] = useState([])
  
  const getData = async () => {
    const data = await getDataAPI()
    setTodo(data.data)
  }
  const deleteTodoItem = async (id) => {
    await deleteDataAPI(id)
    getData()
  }
  const toggleCompleted = async (id, completed) => {
    await putDataAPI(id, completed)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={s.container}>
      <Header />
      <NavBar />
      <div className={s.contentContainer}>
        <div>
          <AddTodo getData={getData} />
          <TodoList todo={todo}
            setTodo={setTodo}
            getData={getData}
            deleteTodoItem={deleteTodoItem}
            toggleCompleted={toggleCompleted} />
        </div>
        <div>
          <CompletedTodo todo={todo}
            deleteTodoItem={deleteTodoItem}
            toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;