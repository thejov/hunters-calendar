// @flow

import React from "react";
import { AnimalCard } from "./AnimalCard";
import type Animal from "./types/Animal";

export type HuntingSeasonCardsProps = {
  huntingSeasons: Array<Animal>,
  today: Date
};

export const ValidHuntingSeasons = (props: HuntingSeasonCardsProps) =>
  props.huntingSeasons
    .filter(animal => canHuntToday(animal, props.today))
    .map((animal, index) => (
      <AnimalCard
        key={index}
        species={animal.species}
        region={animal.region}
        huntingSeason={animal.huntingSeason}
      />
    ));

const canHuntToday = (animal: Animal, today: Date) => {
  if (animal.huntingSeason.dates.length !== 2) {
    return false;
  }

  const [seasonStarts, seasonEnds] = animal.huntingSeason.dates.map(
    date => new Date(date)
  );

  return (
    seasonStarts.getTime() <= today.getTime() &&
    seasonEnds.getTime() >= today.getTime()
  );
};
