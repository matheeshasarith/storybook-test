import { render } from "@testing-library/react";
import { Header } from "./Header";

test("should render", () => {
  render(<Header label="This is header" />);

});
