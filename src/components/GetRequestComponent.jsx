import React, {Component} from 'react'
import axios from "axios";

class GetRequestComponent extends Component {
  constructor(props) {
    super(props);
  }
  state = { post: [] }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({post: response.data})
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() { 
    return ( 
      <>
      <h2>GET REQUEST</h2>
      <ul>
        {this.state.post.length ?
         this.state.post.map(item => 
          <li key={item.id}>
            {item.name}
            elo
          </li>
         )
         : null}
      </ul>
      </>
     );
  }
}
 
export default GetRequestComponent;