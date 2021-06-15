import { Component } from 'react';
import GrocList from './components/groclist/GrocList';
import GrocForm from './components/groclist/GrocForm';
//import { useState } from 'react';

//const App = ({}) => {
//   const [contacts, setContacts] = useState([
//     { id: 1, title: "Bananas", price: 1.20, complete: true },
//     { id: 2, title: "Bread", price: 3.99, complete: false },
//     { id: 3, title: "Shampoo", price: 4.99, complete: false },
// ]}
  // return (
  //   <>
  //   <h1>React Contact List</h1>
  //   <ContactList contacts={contacts}
  //   </>
  //   )
  // }

class App extends Component {
  state = { groclist: [
    { id: 1, title: "Bananas", price: 1.20, complete: true },
    { id: 2, title: "Bread", price: 3.99, complete: false },
    { id: 3, title: "Shampoo", price: 4.99, complete: false },
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

completeUpdate = (id) => {
  const { groclist } = this.state
  this.setState({
    groclist: groclist.map( t => {
      if (t.id === id) {
        return {
          ...t,
          complete: !t.complete
        }
      }
      return t
    })
  })
}

  deleteGroc = (id) => {
    const { groclist } = this.state
    this.setState({ groclist: groclist.filter( g => g.id !== id) })
  }

  render() {
    const { groclist } = this.state
    return (
      <>
        <h1>Groceries</h1>
        <GrocForm addGroclist={this.addGroclist}/>
        <GrocList 
        groclist={this.state.groclist}
        deleteGroc={this.deleteGroc}
        name="Shopping List" 
        completeUpdate={this.completeUpdate}/>
      </>
    )
  }
}

export default App;
