import { Component } from 'react';

class GrocForm extends Component {
  state = { title: "", price: "", complete: false}

  // takes what the user input and saves to state
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // this.setState({ title: "a" })
    //this.setState({ age: "a" })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // function to add the items in state to the groclist
    this.props.addGroclist(this.state)
    this.setState({ title: "", price:"" })
  }

  render() {
    const { title, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='title'
          value={title}
          onChange={this.handleChange}

          placeholder="Grocery Item"
          required
        />
        <input
          name='price'
          value={price}
          onChange={this.handleChange}

          placeholder="Price"
          required
        />
        <button type='submit'>Add</button>
      </form>
    )
  }

}

export default GrocForm;