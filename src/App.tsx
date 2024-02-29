import AddTodo from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import "./styles/global.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import Player from "./pages/Player";

export function App() {
  return (
    <ReduxProvider store={store}>
      <Player />
    </ReduxProvider>
  );
}
