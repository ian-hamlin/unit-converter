import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders lead", () => {
  const { getByText } = render(<App />);
  const leadElement = getByText(/Convert values from/i);
  expect(leadElement).toBeInTheDocument();
});
