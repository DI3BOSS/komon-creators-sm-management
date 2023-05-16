import { render, screen } from "@testing-library/react";
import Header from "./Header";
describe("Given the Header component", () => {
  describe("When it's rendered for mockup purposes", () => {
    test("Then it should show the `Komon Logo Navbar`", () => {
      const imageAltText = "Komon Logo Navbar";

      render(<Header />);

      const expectedAltText = screen.getByAltText(imageAltText);
    });
  });
});
