import React, { useState } from 'react';
import { updateTodo } from '../api';

// todoオブジェクトの型定義
type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TodoEditFormProps = {
  todo: Todo;
  onEdit: () => void;
};

const TodoEditForm: React.FC<TodoEditFormProps> = ({ todo, onEdit }) => {
  const id = todo.id
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const todoData = {
        title,
        description,
      };

      await updateTodo(id, todoData);
      onEdit();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="edit-form-container" onSubmit={handleSubmit}>
      <h3>ToDo 編集 💛</h3>
      <div>
        <label>
          タイトル:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          内容:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Update</button>
    </form>
  );
}

export default TodoEditForm;