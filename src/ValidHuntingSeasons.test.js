import React from "react";
import { ValidHuntingSeasons } from "./ValidHuntingSeasons";
import type { HuntingSeasonCardsProps } from "./ValidHuntingSeasons";
import { AnimalCard } from "./AnimalCard";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const huntingSeasons = [
  {
    species: "Piisami",
    region: "Koko maassa",
    huntingSeason: {
      text: "1.10.2017 — 19.5.2018",
      dates: ["2017-10-1", "2018-5-19"]
    }
  },
  {
    species: "Kettu",
    region: "Lapin maakunnassa",
    huntingSeason: {
      text: "1.8.2017 — 30.4.2018",
      dates: ["2017-8-1", "2018-4-30"]
    }
  },
  {
    species: "Kettu",
    region: "Muualla maassa",
    huntingSeason: {
      text: "1.8.2017 — 14.4.2018",
      dates: ["2017-8-1", "2018-4-14"]
    }
  }
];

const defaultProps: HuntingSeasonCardsProps = {
  huntingSeasons,
  today: new Date("2018-01-01")
};

const render = (props: HuntingSeasonCardsProps) =>
  mount(<ValidHuntingSeasons {...defaultProps} {...props} />);

describe("when given a date suitable for all hunting seasons", () => {
  it("renders an AnimalCard for all passed hunting seasons", () => {
    const validHuntingSeasons = render({ today: new Date("2018-01-01") });
    expect(validHuntingSeasons.find(AnimalCard).length).toEqual(3);
  });
});

describe("when given a date suitable for none of the hunting seasons", () => {
  it("does not render any AnimalCards", () => {
    const validHuntingSeasons = render({ today: new Date("2018-06-01") });
    expect(validHuntingSeasons.find(AnimalCard).length).toEqual(0);
  });
});

describe("when given a date suitable for one of the hunting seasons", () => {
  it("renders one AnimalCard", () => {
    const validHuntingSeasons = render({ today: new Date("2018-05-01") });
    expect(validHuntingSeasons.find(AnimalCard).length).toEqual(1);
  });
});
