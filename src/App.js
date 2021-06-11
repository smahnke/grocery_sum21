import { Component } from 'react';
import GrocList from './components/groclist/GrocList';

class App extends Component {
  state = { groclist: [
    { id: 1, title: "Learn Rails", complete: true },
    { id: 2, title: "Learn React", complete: false },
    { id: 3, title: "Learn Router", complete: false },
]}
  render() {
    const { groclist } = this.state
    return (
      <>
        <h1>My Grocery List</h1>
        <GrocList groclist={groclist} name="dpl"/>
      </>
    )
  }
}

export default App;
