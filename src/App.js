import React, {Component} from 'react'
import GetRequestComponent from './components/GetRequestComponent';
import PostRequestComponent from './components/PostRequestComponent';

class App extends Component {
  render() { 
    return (
      <>
        <GetRequestComponent />
        <PostRequestComponent />
      </>
    );
  }
}
 
export default App;
