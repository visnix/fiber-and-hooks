// import React from 'react';
// import ReactDOM from 'react-dom';
import React from './myReact/index.js';
import Count4 from './Count4.js';
const ReactDOM = React;

function Count3() {
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

function Count() {
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

function App(props) {
  // return (
  //   <div>
  //     <h1 id="title">{props.title}</h1>
  //     <hr></hr>
  //     <section>
  //       <h2>函数组件1</h2>
  //       <Count></Count>
  //       <hr></hr>
  //       <h2>函数组件2</h2>
  //       <Count3></Count3>
  //       <hr></hr>
  //       <h2>Class组件</h2>
  //       <Count4></Count4>
  //     </section>
  //   </div>
  // );

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      {
        id: "title"
      },
      props.title
    ),
    React.createElement("hr", null),
    React.createElement(
      "section",
      null,
      React.createElement("h2", null, "函数组件1"),
      React.createElement(Count, null),
      React.createElement("hr", null),
      React.createElement("h2", null, "函数组件2"),
      React.createElement(Count3, null),
      React.createElement("hr", null),
      React.createElement("h2", null, "Class组件"),
      React.createElement(Count4, null)
    )
  );
}

ReactDOM.render(
  // <App title="Fiber Demo"/>,
  React.createElement(App, {
    title: "Fiber Demo"
  }),
  document.getElementById('root')
);