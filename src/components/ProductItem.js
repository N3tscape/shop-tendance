import { useState } from "react";
import {
  Typography,
  Tooltip,
  IconButton,
  Chip,
} from "@material-tailwind/react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import ProductDetails from "./ProductDetails";
import getCategoryColor from "../Utils/getCategoryColor";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../actions/product.action";

export default function ProductItem({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsModalOpen(true);
  }

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
          <IconButton variant="text">
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>

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
