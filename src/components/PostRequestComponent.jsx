import axios from 'axios';
import React, {Component} from 'react'

class PostRequestComponent extends Component {
  constructor(props) {
    super(props);
  }
  state = { 
    name: '',
    sex: '',
    age: ''
   }
  
  changeHandler = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
    console.log(this.state)
  }

  submitHandler = (event) => {
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/users',this.state)
      .then (response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() { 
    return ( 
      <>
        <h2>POST REQUEST</h2>
        <form onSubmit={this.submitHandler}>
          <input 
            type='text' 
            placeholder='name' 
            name='name' 
            value={this.state.name}
            onChange={this.changeHandler}
          /> <br/>
          <input 
            type='text' 
            placeholder='sex' 
            name='sex' 
            value={this.state.sex}
            onChange={this.changeHandler}
          /> <br/>
          <input 
            type='text' 
            placeholder='age' 
            name='age' 
            value={this.state.age}
            onChange={this.changeHandler}
          /> <br/>
          <button type="submit">Submit</button>
        </form>
      </>
     );
  }
}
 
export default PostRequestComponent;