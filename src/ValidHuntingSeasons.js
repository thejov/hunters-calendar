// @flow

import React from "react";
import { AnimalCard } from "./AnimalCard";

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
