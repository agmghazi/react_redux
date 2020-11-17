import "./App.css";
import configureStore from "./store/configureStore";
import { bugAdded, bugUpdate } from "./store/bugs";

function App() {
  const store = configureStore();
  const unsubscripe = store.subscribe(() => {
    console.log("update state", store.getState());
  });

  store.dispatch(bugAdded("add patch 1"));
  store.dispatch(bugUpdate(1));

  unsubscripe();
  console.log(store);
  console.log(store.getState());

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;

// 1- add reducer
// 2- add store
// 3- use store
// 4- add actionType for more empty code
// 5- add actions modeule for more empty code
