import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import {
  validateTitle,
  validateDescription,
  validatePrice,
  validateImageUrl,
} from "../Utils/formValidation";

const CHECK_CATEGORIES = [
  "Homme",
  "Femme",
  "Unisexe",
  "Vêtements",
  "Chaussures",
  "Accessoires",
  "Sport",
];

/**
 * Renders a product form component.
 *
 * @param {Object} isOpen - A boolean indicating whether the form is open or not.
 * @param {Function} onClose - A function to close the form.
 * @param {Function} onSubmit - A function to submit the form.
 * @return {JSX.Element} The rendered product form component.
 */
export default function ProductForm({ isOpen, onClose, onSubmit }) {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    categories: [],
    basePrice: 0,
    salePrice: 0,
    imageUrl: "",
  });

  const [titleValidation, setTitleValidation] = useState("");
  const [descriptionValidation, setDescriptionValidation] = useState("");
  const [basePriceValidation, setBasePriceValidation] = useState("");
  const [salePriceValidation, setSalePriceValidation] = useState("");
  const [imageValidation, setImageValidation] = useState("");

  /**
   * Handles the input change event.
   *
   * @param {Event} e - The input change event.
   * @return {void}
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = value !== "" ? parseFloat(value) : 0;

    if (name === "basePrice" || name === "salePrice") {
      setProductData({
        ...productData,
        [name]: parsedValue,
      });
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }

    if (name === "basePrice") {
      setBasePriceValidation(validatePrice(parsedValue));
    }

    if (name === "salePrice") {
      setSalePriceValidation(validatePrice(parsedValue));
    }

    if (name === "title") {
      setTitleValidation(validateTitle(value));
    }

    if (name === "description") {
      setDescriptionValidation(validateDescription(value));
    }

    if (name === "imageUrl") {
      setImageValidation(validateImageUrl(value));
    }
  };

  /**
   * Handles the change event of the checkbox.
   *
   * @param {object} e - The event object.
   * @return {void} No return value.
   */
  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    const updatedCategories = [...productData.categories];

    if (updatedCategories.includes(value)) {
      updatedCategories.splice(updatedCategories.indexOf(value), 1);
    } else {
      updatedCategories.push(value);
    }

    setProductData({
      ...productData,
      categories: updatedCategories,
    });
  };

  /**
   * Handles the form submission based on the validation of the input fields.
   *
   * @return {void} - No return value
   */
  const handleSubmit = () => {
    if (
      titleValidation === "success" &&
      descriptionValidation === "success" &&
      basePriceValidation === "success" &&
      salePriceValidation === "success" &&
      imageValidation === "success"
    ) {
      onSubmit(productData);
      setProductData({
        title: "",
        description: "",
        categories: [],
        basePrice: 0,
        salePrice: 0,
        imageUrl: "",
      });
    } else {
      console.log("Form data is not valid. Form not submitted.");
    }
  };

  return (
    <Dialog open={isOpen}>
      <div>
        <DialogHeader>Ajouter un nouveau produit</DialogHeader>
      </div>

      <DialogBody>
        <div className="grid gap-6">
          <Input
            label="Titre du produit"
            name="title"
            variant="static"
            value={productData.title}
            onChange={handleInputChange}
            {...(titleValidation === "success" ? { success: true } : {})}
            {...(titleValidation === "error" ? { error: true } : {})}
          />

          <Textarea
            label="Description du produit"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            {...(descriptionValidation === "success" ? { success: true } : {})}
            {...(descriptionValidation === "error" ? { error: true } : {})}
          />

          <div className="grid gap-2 md:grid-cols-2">
            {CHECK_CATEGORIES.map((category) => (
              <Checkbox
                key={category}
                label={category}
                name="categories"
                value={category}
                onChange={handleCheckboxChange}
              />
            ))}
          </div>

          <Input
            label="Prix de base"
            name="basePrice"
            variant="static"
            value={productData.basePrice}
            onChange={handleInputChange}
            {...(basePriceValidation === "success" ? { success: true } : {})}
            {...(basePriceValidation === "error" ? { error: true } : {})}
          />

          <Input
            label="Prix de vente"
            name="salePrice"
            variant="static"
            value={productData.salePrice}
            onChange={handleInputChange}
            {...(salePriceValidation === "success" ? { success: true } : {})}
            {...(salePriceValidation === "error" ? { error: true } : {})}
          />

          <Input
            label="Image URL"
            name="imageUrl"
            variant="static"
            placeholder="https://example.com/image.jpg"
            value={productData.imageUrl}
            onChange={handleInputChange}
            {...(imageValidation === "success" ? { success: true } : {})}
            {...(imageValidation === "error" ? { error: true } : {})}
          />
        </div>
      </DialogBody>

      <DialogFooter className="space-x-2">
        <Button variant="outlined" color="red" onClick={onClose}>
          Annuler
        </Button>

        <Button variant="gradient" color="green" onClick={handleSubmit}>
          Ajouter
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
