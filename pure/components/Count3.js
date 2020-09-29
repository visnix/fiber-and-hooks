import React from '../mini-react.js'

export default function Count3() {
  const [count, setCount] = React.useState(1);
  
  const onClickHandler = () => {
    setCount(count + 1);
  }

  // return (
  //   <div>
  //     <h3>Count: {count}</h3>
  //     <button onClick={onClickHandler}>Count+1</button>
  //   </div>
  // );
  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Count: ", count),
    React.createElement(
      "button",
      {
        onClick: onClickHandler
      },
      "Count+1"
    )
  );
}