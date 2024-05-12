import {Fragment, useState} from "react";
import Header from "./Header";


/**
 * A counter component that uses the useState hook to add state to a functional component.
 * What is a Hook?
 * A Hook is a special function that lets you “hook into” React features.
 * since React 16.8, we can use useState hook to add state to functional components.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Counter(props) {
    // Hooks let you use different React features from your components.
    // You can either use the built-in Hooks or combine them to build your own.
    // Here is the most common hook: useState
    // State lets a component “remember” information like user input.

    // the function useState returns an array with two elements
    // first element is the current state
    // second element is a function to update the state
    const [count, setCount] = useState(props.initValue);

    // important note:
    // hooks cannot be used inside if statements or loops
    // because they are created in fixed order.

    // render function must return a single element
    // a fragment is a combination of multiple elements:
    // we use it to group multiple elements without creating a new element such as a div

    return (
        <>
            <Header/>
            <h2>Counter: {count}</h2>
            <button onClick={  () => setCount(count - 1)   }> - </button>
            <button onClick={() => setCount(count + 1)}> + </button>
        </>
    );
}

export default Counter;