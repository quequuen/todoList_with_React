import "../css/Todoitem.css";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  console.log(content);

  return (
    <div className="TodoItem">
      <input readOnly type="checkbox" checked={isDone} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
