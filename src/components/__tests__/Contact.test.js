import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

test("should load contact us component", () => {

  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();

});