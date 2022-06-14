import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RouteSwitch from "./RouteSwitch";

describe("HomePage", () => {
  const { container } = render(<RouteSwitch />);

  it("Renders HomePage", () => {
    expect(container).toMatchSnapshot();
  });


});