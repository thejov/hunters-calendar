import React from "react";
import { ValidHuntingSeasons } from "./ValidHuntingSeasons";
import { AnimalCard } from "./AnimalCard";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const huntingSeasons = [
  {
    species: "Tavi",
    region: "Koko maassa",
    huntingSeason: ["2017-08-19T21:00:00.000Z", "2017-12-31T00:00:00.000Z"]
  },
  {
    species: "Heinätavi",
    region: "Koko maassa",
    huntingSeason: ["2017-08-19T21:00:00.000Z", "2017-12-31T00:00:00.000Z"]
  },
  {
    species: "Haapana",
    region: "Koko maassa",
    huntingSeason: ["2017-08-19T21:00:00.000Z", "2017-12-31T00:00:00.000Z"]
  }
];

it("renders one AnimalCard for each passed hunting season object", () => {
  const validHuntingSeasons = mount(
    <ValidHuntingSeasons huntingSeasons={huntingSeasons} />
  );
  expect(validHuntingSeasons.find(AnimalCard).length).toEqual(3);
});
