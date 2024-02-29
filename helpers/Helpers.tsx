export function formatPrice(price: string) {
  const priceNumber = Number(price);
  return new Intl.NumberFormat("en-US", { style: "decimal" }).format(
    priceNumber
  );
}
// Helper function for formatting salary
export const formatSalary = (value: string) => {
  const numericValue = value.replace(/[^\d]/g, ""); // Strip non-numeric characters
  if (numericValue === "") return ""; // Return empty string if no input
  const number = parseInt(numericValue, 10);
  return isNaN(number) ? "" : number.toLocaleString();
};

// Helper function for formatting phone number
export const formatPhoneNumber = (value: string) => {
  // Apply the regular expression for phone number validation
  const isValidPhoneNumber = /^\(?\d{0,3}\)?[\s.-]?\d{0,3}[\s.-]?\d{0,4}$/.test(
    value
  );
  if (isValidPhoneNumber) {
    // If the input matches the phone number format, return it as is
    return value;
  } else {
    return "";
  }
};

export const validateField = (name: string, value: string) => {
  switch (name) {
    case "name":
    case "surname":
    case "nationality":
      if (/[\d]/.test(value))
        return `This ${name} field cannot contain numbers.`;
      break;
    case "age":
      if (!/^\d+$/.test(value) || parseInt(value, 10) < 18)
        return "Age must be a number and at least 18.";
      break;
    case "salary":
      if (!/^\d+$/.test(value.replace(/,/g, "")))
        return "Salary must be a number.";
      break;
    case "phoneNumber":
      // Basic validation for length and format, more sophisticated validation can be added
      if (
        !/^\+972 \d{9}$/.test(formatPhoneNumber(value)) &&
        !/^05\d{8}$/.test(value)
      )
        return "Invalid phone number format.";
      break;
    case "passportId":
      // Simplified validation, replace with actual passport ID rules
      if (value.length < 6) return "Invalid passport ID.";
      break;
    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "invalid Email.";
      break;
    default:
      return "";
  }
  return "";
};
