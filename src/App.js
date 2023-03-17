

import Header from "./components/Header";
import Counter from "./components/Counter";


/**
 * The App component is the root component of our application.
 */
function App() {
  return (
    <div className="App">
        <Counter initValue={10}/>
    </div>
  );
}

export default App;
