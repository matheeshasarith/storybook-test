import { render } from "@testing-library/react";
import { Page } from "./Page";

test("should render", () => {
  render(<Page label="This is the page." />);
});
