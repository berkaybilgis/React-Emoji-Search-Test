import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Emoji list render process", () => {
  test("Emoji list must be rendered properly", () => {
    render(<App />);
    const listItems = screen.getAllByTestId("row");
    expect(listItems.length).toEqual(20);
  });
});
