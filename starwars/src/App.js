import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PersonCard from "./components/PersonCard";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

let people = [];

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [currentPage, setCurrentPage] = useState(1);
  let [currentSearchResults, setCurrentSearchResults] = useState([]);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${currentPage}`)
      .then(response => {
        setCurrentSearchResults(response.data.results);
        setLoading(false);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, [currentPage]);
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const AllCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  let navigate = arg => {
    if (arg === "left") {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      } else {
        setLoading(false);

        alert("You have reached the end");
      }
    }

    if (arg === "right") {
      console.log("movign right");
      setCurrentPage(currentPage + 1);
    }
  };

  let navigateLeft = () => {
    setLoading(true);
    navigate("left");
  };
  let navigateRight = () => {
    setLoading(true);
    navigate("right");
  };

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Button
        variant="primary"
        size="lg"
        onClick={!isLoading ? navigateLeft : null}
      >
        {isLoading ? "Loading…" : "Load Previous Page"}
      </Button>{" "}
      <Button
        variant="primary"
        size="lg"
        onClick={!isLoading ? navigateRight : null}
      >
        {isLoading ? "Loading…" : "Load Next Page"}
      </Button>
      <AllCardsContainer>
        {currentSearchResults.map(person => {
          return <PersonCard person={person} key={person.name}></PersonCard>;
        })}
      </AllCardsContainer>
    </div>
  );
};

export default App;
