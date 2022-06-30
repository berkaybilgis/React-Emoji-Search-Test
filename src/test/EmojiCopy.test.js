import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Emoji Copy Test", () => {
  test("When emoji clicked it must be copied", () => {
    render(<App />);
    const clickEvent = screen.getAllByTestId("row");
    expect(clickEvent[1]).toHaveAttribute("data-clipboard-text");
  });
});
