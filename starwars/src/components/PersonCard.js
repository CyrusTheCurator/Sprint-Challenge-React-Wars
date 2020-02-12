import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PersonCard = props => {
  let name = props.person.name;
  let height = props.person.height;
  let mass = props.person.mass;
  let hairColor = props.person.hair_color;
  let skinColor = props.person.skin_color;
  let eyeColor = props.person.eye_color;
  let birthYear = props.person.birth_year;
  let gender = props.person.gender;
  let homeworld = props.person.homeworld;

  let CardContainer = styled.div`
    color: white;
    font-size: 1.2rem;
    width: 25vw;
    height 41vh;
    background-color: dimgray;
    margin: 5vh 1vw 5vh 1vw;
    padding-bottom: 1vh;
    border: 2px solid black;
    
  `;

  return (
    <CardContainer>
      <p>Name: {name}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair Color: {hairColor}</p>
      <p>Skin Color: {skinColor}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Birth Year: {birthYear}</p>
      <p>Gender: {gender}</p>
      <p>Homeworld: {homeworld}</p>
    </CardContainer>
  );
};

export default PersonCard;
