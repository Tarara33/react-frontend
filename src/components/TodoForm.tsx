import { useState } from "react";
import { createTodo } from "../api";

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      await createTodo ({
        title,
        description
      });

      // 作成成功時の処理
      setTitle('');
      setDescription('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Todo 作成 🩷</h2>
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
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </label>
      </div>
      <button type="submit">作成！</button>
    </form>
  )
}

export default TodoForm;