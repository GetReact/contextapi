import React, { Component } from "react";
//make new context
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "wes",
    age: 100,
    cool: true,
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growYearOlder: () =>
            this.setState({
              age: this.state.age + 1,
            }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = (props) => (
  <div class="family">
    <Person></Person>
  </div>
);
class Person extends Component {
  render() {
    return (
      <div class="person">
        <MyContext.Consumer>
          {(context) => (
            <>
              <p>Name {context.state.name}</p>
              <p>Age {context.state.age}</p>
              <button onClick={context.growYearOlder}>🍰</button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p>I am the app</p>
          <Family></Family>
        </div>
      </MyProvider>
    );
  }
}
