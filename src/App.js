import { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';


class App extends Component {
  render() {
    return (
      /* the navbar was moved to the main component. */
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
/* this app is an export from App.js file */