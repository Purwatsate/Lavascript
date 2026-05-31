import "./QuickStart.css";
import ConditionalRendering from "./ConditionalRendering/ConditionalRendering";

// variable
// const User = "UserA"; // string variable
// const NAME = <h1> Hello {User} </h1>; // JSX element

// function MyButton() {
//   // React component
//   return <button>I'm a button</button>;
// }

export function QuickStart() {
  return (
    <div className="quickStartContainer">
      <div>
        <ConditionalRendering />
      </div>
    </div>
  );
}
