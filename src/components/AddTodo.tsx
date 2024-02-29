import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todoEmpty = newTodo.length === 0;

  const handleAddNewTodo = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      add({
        newTodo,
      })
    );
    setNewTodo("");
  };

  return (
    <form onSubmit={handleAddNewTodo}>
      <input
        type="text"
        placeholder="Add Todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />

      <button disabled={todoEmpty} type="submit">
        Adicionar
      </button>
    </form>
  );
}
