import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Init", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmBtn = screen.getByRole("button");
  expect(confirmBtn).toBeDisabled();
});

test("disable first, enable after btn clicked", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  const confirmBtn = screen.getByRole("button");

  await user.click(checkbox);
  expect(confirmBtn).toBeEnabled();
});

test("popover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const nullPopober = screen.queryByText(
    /no ice crean will actully be delivered/i
  );

  expect(nullPopober).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/Terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actully be delivered/i);

  expect(popover).toBeInTheDocument();

  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
