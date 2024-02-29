import {
  formatPrice,
  formatSalary,
  formatPhoneNumber,
  validateField,
} from "./Helpers";

describe("Helper Functions", () => {
  describe("formatPrice", () => {
    it("should format numbers correctly", () => {
      expect(formatPrice("1000")).toBe("1,000");
      expect(formatPrice("100")).toBe("100");
      expect(formatPrice("1000000")).toBe("1,000,000");
    });

    it("should handle invalid input gracefully", () => {
      expect(formatPrice("abc")).toBe("NaN");
    });
  });

  describe("formatSalary", () => {
    it("should remove non-numeric characters and format as a number", () => {
      expect(formatSalary("$1,000")).toBe("1,000");
      expect(formatSalary("2,000 euros")).toBe("2,000");
    });

    it("should return empty string for non-numeric input", () => {
      expect(formatSalary("Not a number")).toBe("");
    });
  });

  describe("formatPhoneNumber", () => {
    it("should validate and format phone numbers correctly", () => {
      expect(formatPhoneNumber("123-456-7890")).toBe("123-456-7890");
      expect(formatPhoneNumber("(123) 456 7890")).toBe("(123) 456 7890");
      expect(formatPhoneNumber("invalid")).toBe("");
    });
  });

  describe("validateField", () => {
    it("should validate name fields without numbers", () => {
      expect(validateField("name", "John")).toBe("");
      expect(validateField("name", "John123")).toBe(
        "This name field cannot contain numbers."
      );
    });

    it("should validate age as numeric and at least 18", () => {
      expect(validateField("age", "20")).toBe("");
      expect(validateField("age", "17")).toBe(
        "Age must be a number and at least 18."
      );
    });

    it("should validate salary as numeric", () => {
      expect(validateField("salary", "50000")).toBe("");
      expect(validateField("salary", "50,000")).toBe("");
      expect(validateField("salary", "NotANumber")).toBe(
        "Salary must be a number."
      );
    });

    it("should validate phone numbers correctly", () => {
      expect(validateField("phoneNumber", "0512345678")).toBe("");
      expect(validateField("phoneNumber", "Invalid")).toBe(
        "Invalid phone number format."
      );
    });

    it("should validate emails correctly", () => {
      expect(validateField("email", "test@example.com")).toBe("");
      expect(validateField("email", "invalidemail")).toBe("invalid Email.");
    });
  });
});
