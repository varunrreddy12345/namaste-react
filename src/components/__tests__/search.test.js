import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

test("should search restaurants correctly", () => {

  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // find search input
  const searchInput = screen.getByPlaceholderText("Search");

  // find search button
  const searchButton = screen.getByRole("button", { name: /search/i });

  // type in search input
  fireEvent.change(searchInput, {
    target: { value: "burger" }
  });

  // click search button
  fireEvent.click(searchButton);

  // check if filtered result appears
  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBeGreaterThan(0);

});