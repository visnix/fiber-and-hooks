import React from '../mini-react.js'

export default function Count() {
  const [count, setCount] = React.useState(1);
  const [count2, setCount2] = React.useState(1);
  
  const onClickHandler = () => {
    setCount(count + 1);
  }

  const onClickHandler2 = () => {
    setCount2(count2 + 1);
  }

  // return (
  //   <div>
  //     <h3>Count1: {count}</h3>
  //     <button onClick={onClickHandler}>Count1+1</button>
  //     <h3>Count2: {count2}</h3>
  //     <button onClick={onClickHandler2}>Count2+1</button>
  //   </div>
  // );

  return React.createElement(
    "div",
    null,
    React.createElement("h3", null, "Count1: ", count),
    React.createElement(
      "button",
      {
        onClick: onClickHandler
      },
      "Count1+1"
    ),
    React.createElement("h3", null, "Count2: ", count2),
    React.createElement(
      "button",
      {
        onClick: onClickHandler2
      },
      "Count2+1"
    )
  );
}