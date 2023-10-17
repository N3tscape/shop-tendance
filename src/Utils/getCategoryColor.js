/**
 * Returns the color associated with a given category.
 *
 * @param {string} category - The category to get the color for.
 * @return {string} The color associated with the category.
 */
export default function getCategoryColor(category) {
  switch (category) {
    case "Chaussures":
      return "indigo";

    case "Vêtements":
      return "teal";

    case "Accessoires":
      return "orange";

    case "Sport":
      return "yellow";

    case "Homme":
      return "light-blue";

    case "Femme":
      return "pink";

    case "Unisexe":
      return "purple";

    default:
      return "gray";
  }
}
