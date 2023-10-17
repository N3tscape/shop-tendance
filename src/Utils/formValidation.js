export const validateTitle = (title) => {
  return title.trim() === "" ? "error" : "success";
};

export const validateDescription = (description) => {
  return description.trim() === "" ? "error" : "success";
};

export const validatePrice = (price) => {
  return isNaN(price) || parseFloat(price) > 0 ? "success" : "error";
};

export const validateImageUrl = (url) => {
  const urlValidationRegex =
    /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;
  return urlValidationRegex.test(url) ? "success" : "error";
};
