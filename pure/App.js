import React from './mini-react.js'
import Count from './components/Count.js'
import Count3 from './components/Count3.js'
import Count4 from './components/Count4.js'

export default function App(props) {
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