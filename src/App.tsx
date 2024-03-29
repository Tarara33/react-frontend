import { useEffect, useState } from 'react';
import './App.css';
import { getTodos } from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// todoの型定義
type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

const  App = () => {

  // Todoリストの初期値を空の配列に設定
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Error while fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

  // Todo削除後、削除されたTodoを除いたTodoリストを表示する関数
  const handleTodoDelete = async (todoId: number) => {
    try {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="container">
      <h1>ToDo List</h1>
      <TodoForm />
      <TodoList todos={todos} onTodoDelete={handleTodoDelete}/>
    </div>
  );
};

export default App;