// @flow

import React from "react";
import { Well } from "react-bootstrap";
import "./ValidHuntingSeasons.css";

type HuntingSeasonCardsProps = {
  huntingSeasons: Array<Object>
};

export const ValidHuntingSeasons = (props: HuntingSeasonCardsProps) =>
  props.huntingSeasons.map((animal, index) => (
    <AnimalCard
      key={index}
      species={animal.species}
      region={animal.region}
      huntingSeason={animal.huntingSeason}
    />
  ));

type AnimalCardProps = {
  species: string,
  region: string,
  huntingSeason: string
};

const AnimalCard = (props: AnimalCardProps) => (
  <Well className="animalCard" bsSize="large">
    <h2>{props.species}</h2>
    <p>{props.region}</p>
    <p>{props.huntingSeason}</p>
  </Well>
);
