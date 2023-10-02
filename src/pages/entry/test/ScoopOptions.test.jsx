import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display image", () => {
  render(<Options optionType=""></Options>);

  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
