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
  const [filterTodo, setFilterTodo] = useState(todo)

  const onHandler = (userId) => {
    let data = [...todo]
    if (userId) {
      data = data.filter(el => el.userId === userId)
    }
    setFilterTodo(data)
  }
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
      <Header onHandler={onHandler} />
      <NavBar />
      <div className={s.contentContainer}>
        <div>
          <AddTodo getData={getData}
            filterTodo={filterTodo}
            setFilterTodo={setFilterTodo}
          />
          <TodoList filterTodo={filterTodo}
            setTodo={setTodo}
            getData={getData}
            deleteTodoItem={deleteTodoItem}
            toggleCompleted={toggleCompleted} />
        </div>
        <div>
          <CompletedTodo filterTodo={filterTodo}
            deleteTodoItem={deleteTodoItem}
            toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}

export default App;