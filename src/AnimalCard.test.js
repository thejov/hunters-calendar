import React from "react";
import { AnimalCard } from "./AnimalCard";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const card = mount(
  <AnimalCard
    species="Tavi"
    region="Koko maassa"
    huntingSeason={["2017-08-19", "2017-12-31"]}
  />
);

it("renders card with species name in header", () => {
  expect(card.find("h2").text()).toEqual("Tavi");
});

it("renders card with region", () => {
  expect(
    card
      .find("p")
      .at(0)
      .text()
  ).toEqual("Koko maassa");
});

it("renders card with hunting seasons", () => {
  const huntingSeasons = card
    .find("p")
    .at(1)
    .text();

  expect(huntingSeasons).toContain("2017-08-19");
  expect(huntingSeasons).toContain("2017-12-31");
});
