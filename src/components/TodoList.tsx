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
  onTodoDelete: (todoId: number) => void;
};


const TodoList: React.FC<TodoListProps> = ({ todos, onTodoDelete }) => {
  const handleTodoDelete = (todoId: number) => {
    onTodoDelete(todoId);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleTodoDelete} />
      ))}
    </ul>
  );
};

export default TodoList;