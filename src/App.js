import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox} from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(){
    super();

    this.state={
      string:'Hi Javad',
      monsters:[
        {
          name:'ali',
          id:'1'
        },
        {
          name:'reza',
          id:'2'
        },
        {
          name:'hossein',
          id:'3'
        }],
        users:[],
        searchField:''
    };

    //this.handleChange=this.handleChange.bind(this);
  }
  
  componentDidMount(){
           fetch('https://jsonplaceholder.typicode.com/users')
           //fetch('http://redbee.ir/service/ProductList?ApiKey=redbee@2016.ir') Access-Control-Allow-Origin
           .then(respons => respons.json())
           .then(user => this.setState({users:user}))
           //.catch(error => {console.error(error)})
    };

    handleChange = e => {
      this.setState({searchField:e.target.value})
    };

  render(){
    const {users,searchField} = this.state;
    const filteredMonsters=users.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.string}
        </p>
        <button onClick={() => this.setState({ string:'Bye Javad' })}>Change</button>
        
      </header>
      <ul>{this.state.monsters.map(monster => (
          <li key={ monster.id } >
                  { monster.name }
          </li>
         ))}
        </ul>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        handleChange={this.handleChange}
        />
        <CardList users={filteredMonsters}/>
        
    </div>
  );
}
}

export default App;
