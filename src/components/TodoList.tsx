import React from 'react';

// todoオブジェクトの型定義
type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

// propsの型定義
type TodoListProps = {
  todos: Todo[];
};


const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;