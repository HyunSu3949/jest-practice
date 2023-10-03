import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display image", async() => {
  render(<Options optionType="scoops"></Options>);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
test("display topping", async() => {
  render(<Options optionType="toppings"></Options>);

  const images = await screen.findAllByRole("img", { name: /topping$/i });
  expect(images).toHaveLength(3);

  const altText = images.map((e) => e.alt);
  expect(altText).toEqual(["Cherries topping", "M&Ms topping",
"Hot fudge topping"]);
});