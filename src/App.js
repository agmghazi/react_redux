import "./App.css";
import configureAppStore from "./store/configureStore";
import { addBug, loadBugs } from "./store/bugs";

function App() {
  const store = configureAppStore();

  //like get data from API
  //UI ayer
  store.dispatch(addBug({ description: "a", ddd: "aaa" }));

  setTimeout(() => {
    store.dispatch(loadBugs());
  }, 2000);

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
