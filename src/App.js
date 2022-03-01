
import {useState, Fragment} from "react";


function HeaderComponent() {
  return (
    <div>
      <h1>A sample react app</h1>
        <p>What is a React Component?</p>
        <p>A React Component is a small piece of code that is used to render a single piece of UI.
            It is a self-contained unit of UI that can be rendered on its own, or it can be rendered inside of another component.
            A React Component is implemented as class that extends React.Component OR as a function (the new way).
            A React element can be a HTML element, a component, or a combination of both.
            A React element can also be a fragment, which is a container for other elements.
        </p>
    </div>
  );
}
// What is a Hook?
// A Hook is a special function that lets you “hook into” React features.
// since React 16.8, we can use useState hook to add state to functional components.

function Counter(props) {
    // the function useState returns an array with two elements
    // first element is the current state
    // second element is a function to update the state
    const [count, setCount] = useState(props.initValue);

    // important note:
    // hooks cannot be used inside if statements or loops
    // because they are created in fixed order

    // render function must return a single element
    // a fragment is a combination of multiple elements:
    // we use it to group multiple elements.

    return (
        <Fragment>
            <HeaderComponent />
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count - 1)}> - </button>
            <button onClick={() => setCount(count + 1)}> + </button>
        </Fragment>
    );
}

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
