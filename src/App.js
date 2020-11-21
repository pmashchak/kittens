import React from 'react';
import CardList from './components/card-list/card-list.component';
import SeachBox from './components/search-box/search-box.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [
      ],
      searchField: ''
    }
  }
  componentDidUpdate() {
    console.log('update')
  }

  componentDidMount() {
    console.log('mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    console.log('render')
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <SeachBox placeholder="search kittens" handleChange={this.handleChange}/>
        <h1>Kittens</h1>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
