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
