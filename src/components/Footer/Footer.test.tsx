import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
describe("Given the Footer component", () => {
  describe("When it's rendered for mockup purposes", () => {
    test("Then it should show the `Komon Logo`", () => {
      const imageAltText = "Komon Logo";

      render(<Footer />);

      const expectedAltText = screen.getByAltText(imageAltText);

      expect(expectedAltText).toBeInTheDocument();
    });
  });
});
