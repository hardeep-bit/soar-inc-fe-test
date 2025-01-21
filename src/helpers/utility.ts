import { userValidations } from "../constants";

export const formatDate = (inputDate: any) => {
  const date = new Date(inputDate);
  const day = String(date.getDate()).padStart(2, '0');

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export const getCurrentFormattedDate = () => {
  const date = new Date();
  return date.toISOString();
};

export const truncateString = (input: string): string => {
  if (input.length <= 11) {
    return input;
  }
  return input.substring(0, 8) + '...'; // 8 chars + 3 dots = 11 chars
}

export function validateField(id: any, value: any, label: any) {
  const validation = userValidations[id];

  if (!validation) {
    return `Validation rules for '${label}' not found.`;
  }

  const { isRequired, min, max, regex, onlynumbers } = validation;

  if (isRequired && (!value || value.trim() === "")) {
    return `${label} is required.`;
  }

  if (onlynumbers && /\D/.test(value)) {
    return `${label} must contain only numbers.`;
  }

  if (regex && !new RegExp(regex).test(value)) {
    return `${label} is invalid.`;
  }

  if (value.length < min) {
    return `${label} must be at least ${min} characters long.`;
  }

  if (value.length > max) {
    return `${label} must be no more than ${max} characters long.`;
  }

  return "";
}