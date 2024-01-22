import React from 'react';
import TodoItem from './TodoItem';

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
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;