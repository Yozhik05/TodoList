import { useState } from "react";
import "./styles.css";

const InitialTodoList = [
  {
    id: 2512,
    title: "t",
    description: "desc",
    done: false
  },
  {
    id: 2172,
    title: "t",
    description: "desc",
    done: false
  }
];

export default function App() {
  const [todoList, setTodoList] = useState(InitialTodoList);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescr, setTodoDescr] = useState("");

  function AddTodo() {
    let todo = {
      id: Date.now(),
      title: todoTitle,
      description: todoDescr,
      done: false
    };

    setTodoList([...todoList, todo]);

    setTodoDescr("");
    setTodoTitle("");
  }
  return (
    <div className="App">
      <div>
        <div>
          <h1>Todo List</h1>
        </div>
        <br />
        <div>
          <input
            placeholder="Title"
            value={todoTitle}
            onChange={(e) => {
              setTodoTitle(e.currentTarget.value);
            }}
          />
        </div>
        <br />
        <div>
          <input
            placeholder="Description"
            value={todoDescr}
            onChange={(e) => {
              setTodoDescr(e.currentTarget.value);
            }}
          />
        </div>
        <br />
        <button disabled={!(todoTitle && todoDescr)} onClick={AddTodo}>
          ADD
        </button>
      </div>
      <div>
        {todoList.map((todo, index) => {
          return (
            <div
              className="todo"
              style={{ backgroundColor: todo.done ? "grey" : "green" }}
            >
              <div>Title:{todo.title}</div>
              <div>Description: {todo.description}</div>
              <button
                disabled={todo.done}
                onClick={() => {
                  todoList[index].done = !todo.done;
                  setTodoList([...todoList]);
                }}
              >
                DONE
              </button>
              <button
                onClick={() => {
                  setTodoList(todoList.filter((elem) => todo.id !== elem.id));
                }}
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
