import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox1 from "../components/SearchBox1";
import "./App.css";
import Scroll from "../components/Scroll.js";
import ErrorBoundry from "../components/ErrorBoundry";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
    console.log(count);
  }, [count]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  // const filteredRobots = robots.filter((robot) => {
  //   return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  // });
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <SearchBox1 searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
