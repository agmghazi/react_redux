import "./App.css";
import configureAppStore from "./store/configureStore";
import { bugAdded, bugUpdate, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/project";

function App() {
  const store = configureAppStore();
  // const unsubscripe = store.subscribe(() => {
  //   console.log("update state", store.getState());
  // });

  store.dispatch(bugAdded({ description: "add patch 1" }));
  store.dispatch(bugUpdate({ id: 1 }));
  store.dispatch(projectAdded({ name: "project 1" }));

  const unresolveBugs = getUnresolvedBugs(store.getState());
  const unresolveBugs2 = getUnresolvedBugs(store.getState());
  console.log("unresolveBugs" + unresolveBugs);
  console.log(unresolveBugs === unresolveBugs2);

  // unsubscripe();
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
