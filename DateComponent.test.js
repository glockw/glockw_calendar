import { screen } from "@testing-library/react";
import { getPage } from "next-page-tester";

describe("DateComponent", () => {
  describe("render", () => {
    it("should return a container", async () => {
      const { render } = await getPage({
        route: "/date/1-28",
      });

      render();
      expect(screen.getByText("Feb")).toBeInTheDocument();
    });
  });
});
