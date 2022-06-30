import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Filter Emoji Test", () => {
  test("When filtering process start the emoji list must be rendered properly", () => {
    render(<App />);
    const text = screen.getByText("Grinning");
    expect(text).toBeInTheDocument("Grinning");
  });
});
