import { render, screen } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { URL } from "../../../constant";

test.only("error test", async () => {
  server.resetHandlers(
    rest.get(
      `${URL}/scoops`,
      (req, res, ctx) => res(ctx.status(500)),
      rest.get(`${URL}/toppings`, (req, res, ctx) => res(ctx.status(500)))
    )
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert");
  expect(alerts).toHaveLength(2);
});

test("fake", () => {});
