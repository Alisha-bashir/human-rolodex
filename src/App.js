import React from "react";
import "./App.css";
import { Cardlist } from "./components/card-list/card-list.component";
import SearchBox from './components/search-fields/search-field.component'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      humans: [],
      searchFields: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ humans: user }));
  }
  handleChange = e => {
    this.setState({ searchFields: e.target.value })
  }

  render() {
    const { humans, searchFields } = this.state;
    const filteredHumans = humans.filter((human) =>
      human.name.toLowerCase().includes(searchFields.toLowerCase())
    )
    return (
      <div className="App"> 
      <h1>Human Rolodex</h1>
       <SearchBox
        placeholder="Search Humans"
        handleChange={this.handleChange}
        />
        <Cardlist humans={filteredHumans} />
      </div>
    );
  }
}
// we have destructured the properties in the searchbox components.
export default App;
