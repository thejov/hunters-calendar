// @flow

import React from "react";
import { Well } from "react-bootstrap";
import "./AnimalCard.css";

type AnimalCardProps = {
  species: string,
  region: string,
  huntingSeason: { text: string, dates: Array<string> }
};

export const AnimalCard = (props: AnimalCardProps) => (
  <Well className="animalCard" bsSize="large">
    <h2>{props.species}</h2>
    <p>{props.region}</p>
    <p>{props.huntingSeason.text}</p>
  </Well>
);
