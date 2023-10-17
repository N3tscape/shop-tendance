/**
 * Validates the title by checking if it is empty or not.
 *
 * @param {string} title - The title to be validated.
 * @return {string} Returns "error" if the title is empty, otherwise returns "success".
 */
export const validateTitle = (title) => {
  return title.trim() === "" ? "error" : "success";
};

/**
 * Validates the description provided.
 *
 * @param {string} description - The description to be validated.
 * @return {string} Returns "error" if the description is empty, otherwise returns "success".
 */
export const validateDescription = (description) => {
  return description.trim() === "" ? "error" : "success";
};

/**
 * Validates the price.
 *
 * @param {number|string} price - The price to validate.
 * @return {string} Returns "success" if the price is valid, otherwise returns "error".
 */
export const validatePrice = (price) => {
  return isNaN(price) || parseFloat(price) > 0 ? "success" : "error";
};

/**
 * Validates if the given URL is an image URL.
 *
 * @param {string} url - The URL to be validated.
 * @return {string} Returns "success" if the URL is a valid image URL, otherwise returns "error".
 */
export const validateImageUrl = (url) => {
  const urlValidationRegex =
    /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;

  return urlValidationRegex.test(url) ? "success" : "error";
};
