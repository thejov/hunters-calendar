// @flow

import React from "react";
import { Well } from "react-bootstrap";
import "./AnimalCard.css";

type AnimalCardProps = {
  species: string,
  region: string,
  huntingSeason: string
};

export const AnimalCard = (props: AnimalCardProps) => (
  <Well className="animalCard" bsSize="large">
    <h2>{props.species}</h2>
    <p>{props.region}</p>
    <p>{props.huntingSeason}</p>
  </Well>
);
