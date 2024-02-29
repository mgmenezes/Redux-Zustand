import { RootState } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { useAppSelector } from "../store";

export function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo;
  });

  console.log(todos);

  return (
    <ul>
      {todos.map((todo: string) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
}
