import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("should render", () => {
  render(<Button label="Click  Me!" />);
  expect(screen.getByRole("button")).toHaveTextContent(/click me/i);
});
