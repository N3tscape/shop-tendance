import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, updateProduct } from "../actions/product.action";

import ProductDetails from "./ProductDetails";
import ProductEditForm from "./ProductEditForm";
import getCategoryColor from "../Utils/getCategoryColor";

import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  Tooltip,
  IconButton,
  Chip,
} from "@material-tailwind/react";

/**
 * Renders a single product item in a table row.
 *
 * @param {Object} product - The product object to be displayed.
 * @return {JSX.Element} The JSX element representing the product item.
 */
export default function ProductItem({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [isEditFormOpen, setEditFormOpen] = useState(false);

  const openEditForm = () => {
    setEditFormOpen(true);
  };

  const closeEditForm = () => {
    setEditFormOpen(false);
  };

  const handleEditProduct = (editedProductData) => {
    dispatch(updateProduct(editedProductData));
    closeEditForm();
  };

  /**
   * Opens a modal.
   *
   * @param {none} None - This function does not take any parameters.
   * @return {none} None - This function does not return any value.
   */
  function openModal() {
    setIsModalOpen(true);
  }

  /**
   * Closes the modal.
   *
   * @param {none}
   * @return {none}
   */
  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <tr key={product.id} className="even:bg-blue-gray-50/50">
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {product.title}
        </Typography>
      </td>

      <td className="p-4">
        <div className="flex gap-2">
          {product.categories.map((category, index) => (
            <Chip
              key={index}
              color={getCategoryColor(category)}
              value={category}
            />
          ))}
        </div>
      </td>

      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {product.basePrice.toFixed(2)} €
        </Typography>
      </td>

      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {product.salePrice.toFixed(2)} €
        </Typography>
      </td>

      <td className="w-32">
        <Tooltip content="Voir">
          <IconButton variant="text" onClick={openModal}>
            <EyeIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>

        <Tooltip content="Modifier">
          <IconButton variant="text" onClick={openEditForm}>
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>

        {isEditFormOpen && (
          <ProductEditForm
            isOpen={isEditFormOpen}
            onClose={closeEditForm}
            onSubmit={handleEditProduct}
            initialProductData={product}
          />
        )}

        <Tooltip content="Supprimer">
          <IconButton
            variant="text"
            onClick={() => dispatch(deleteProduct(product.id))}
          >
            <TrashIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>

      {isModalOpen && (
        <ProductDetails
          product={product}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </tr>
  );
}
