import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    contents: null,
  };

  componentDidMount() {
    this.callApi();
    }
 
  callApi = () => {
    fetch("https://api.github.com/repos/matejmeglic/por/contents/public/img/")
    .then((res) => res.json)
    .then((res) => {
      console.log(res);
  
    } 
    )
    
  
  
  }
 
  render() {
 
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}
}

export default App;
