import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { OrderDetailsProvider } from "../../../contexts/OrderDetails";
test("total test", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />, {
    wrapper: OrderDetailsProvider,
  });
  //처음에 0
  const scoopsSubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsSubtotal).toHaveTextContent("0.00");
  // 바닐라 한개 추가 => 2
  const vaillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await user.clear(vaillaInput);
  await user.type(vaillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");
  // 초코 두개 추가 => 6
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});
