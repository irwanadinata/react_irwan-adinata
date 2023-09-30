import "@testing-library/jest-dom";
import { render, screen, within, fireEvent } from "@/__tests__/utils";
import App from "@/pages/createProduct";

const productInput = [
  "input-product-name",
  "input-product-category",
  "input-product-image",
  "input-product-freshness",
  "input-product-description",
  "input-product-price",
  "btn-submit",
];

describe("Create Product Page", () => {
  beforeEach(() => {
    render(<App />);
  });
  

  describe("Renders the page", () => {
    it("should render the form components", () => {
      const form = screen.getByLabelText("product-form");
      for (const input of productInput) {
        expect(within(form).getByLabelText(input)).toBeTruthy();
      }
    });

    it("should render the table component", () => {
      const table = screen.getByRole("table");
      expect(table).toBeInTheDocument();
    });
  });


  describe("Action for Product", () => {
    it("render product name input and displays entered text", () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");
      fireEvent.change(productNameInput, {
        target: { value: "New Product" },
      });
      expect(productNameInput).toHaveValue("New Product");
    });

    it("should show error message when Product Name is empty", async () => {
      const form = screen.getByLabelText("product-form");
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);

      const errorText = await screen.findByText(
        "Please enter a valid product name"
      );
      expect(errorText).toBeInTheDocument();
    });

    it("should show error message when Product Name contains @/#{}", async () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");

      fireEvent.change(productNameInput, { target: { value: "@Test" } });
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);

      const errorText = await screen.findByText(
        "Product name cannot contain @, #, or {}"
      );
      expect(errorText).toBeInTheDocument();
    });

    it("should show error message when Product Name exceeds 25 characters", async () => {
      const form = screen.getByLabelText("product-form");
      const productNameInput =
        within(form).getByLabelText("input-product-name");

      fireEvent.change(productNameInput, {
        target: { value: "ThisProductNameIsTooLongToBeValidated" },
      });
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);

      const errorText = await screen.findByText(
        "Product name must not exceed 25 characters"
      );
      expect(errorText).toBeInTheDocument();
    });

    it("should show error message product name is empty", async () => {
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);
      const errorTexts = await screen.findAllByText(
        "Please enter a valid product name"
      );
      expect(errorTexts.length).toBeGreaterThan(0);
    });

    it("should show error message product category is empty", async () => {
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);
      const errorTexts = await screen.findAllByText(
        "Please enter a valid product category"
      );
      expect(errorTexts.length).toBeGreaterThan(0);
    });
    it("should show error message images of product is empty", async () => {
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);
      const errorTexts = await screen.findAllByText("Max image size is 5MB.");
      expect(errorTexts.length).toBeGreaterThan(0);
    });
    it("should show error product freshness is empty", async () => {
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);
      const errorTexts = await screen.findAllByText(
        "Expected string, received null"
      );
      expect(errorTexts.length).toBeGreaterThan(0);
    });
    it("should show error message product category is empty", async () => {
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);
      const errorTexts = await screen.findAllByText(
        "Please enter a valid additional description"
      );
      expect(errorTexts.length).toBeGreaterThan(0);
    });

    it("should show error message product price is empty", async () => {
      const submitButton = screen.getByLabelText("btn-submit");
      fireEvent.click(submitButton);
      const errorTexts = await screen.findAllByText(
        "Please enter a valid product price"
      );
      expect(errorTexts.length).toBeGreaterThan(0);
    });
    
  });
});
