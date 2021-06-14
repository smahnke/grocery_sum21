import { Component } from 'react';
import GrocList from './components/groclist/GrocList';
import GrocForm from './components/groclist/GrocForm';

class App extends Component {
  state = { groclist: [
    { id: 1, title: "Learn Rails", complete: true },
    { id: 2, title: "Learn React", complete: false },
    { id: 3, title: "Learn Router", complete: false },
]}

//helper function to generate ids
getUniqId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

addGroclist = (incomingGroclist) => {
  const { groclist } = this.state
  const newGroclist = { id: this.getUniqId(), ...incomingGroclist}
  this.setState({ groclist: [...groclist, newGroclist] })
}

  render() {
    const { groclist } = this.state
    return (
      <>
        <h1>My Grocery List</h1>
        <GrocForm addGroclist={this.addGroclist}/>
        <GrocList groclist={groclist} name="dpl"/>
      </>
    )
  }
}

export default App;
