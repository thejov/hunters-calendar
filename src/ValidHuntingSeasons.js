// @flow

import React from "react";
import { AnimalCard } from "./AnimalCard";
import type Animal from "./types/Animal";

type HuntingSeasonCardsProps = {
  huntingSeasons: Array<Animal>
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
