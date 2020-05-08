import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    contents: [],
  };

  componentDidMount() {
    this.callApi();
    }
 
  callApi = () => {
    fetch("https://api.github.com/repos/matejmeglic/por/contents/public/img/")
    .then((res) => res.json())
    .then((res) => {
      let counter = res.length-1;
      let list = [];
       while (counter >= 0) {
       list.push(res[counter].name);
       counter--;}
       this.setState({
        contents: list,
      });
      } 
    )  
  }
 
  render() {
  const {contents} = this.state;
  console.log(contents);

  return (
    <div className="App">
      <header className="intro">
        <h1>Porkola-Pipola-Boris</h1>
        <p>Opazuj rast pora Borisa</p>
      <div className="App-header">
        {
          contents.map(element => <div className="container"><img className="photo" src={`/img/${element}`} alt={`${element}`} key={`${element}`} /></div>)
        }
      </div>
      </header>
    </div>
  );
}
}

export default App;
