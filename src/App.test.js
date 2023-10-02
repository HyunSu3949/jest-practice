import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const button = screen.getByRole("button", {
    name: "누르면 색이 바뀌는 버튼",
  });

  fireEvent.click(button);

  expect(button).toHaveStyle({ color: "blue" });
  fireEvent.click(button);

  expect(button).toHaveStyle({ color: "red" });
});
