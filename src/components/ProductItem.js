import { Typography, Tooltip, IconButton, Chip } from "@material-tailwind/react";
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import getCategoryColor from "../Utils/getCategoryColor";

export default function ProductItem({ product }) {
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
                <Chip key={index} color={getCategoryColor(category)} value={category} />
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
          <IconButton variant="text">
            <EyeIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>

        <Tooltip content="Modifier">
          <IconButton variant="text">
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>

        <Tooltip content="Supprimer">
          <IconButton variant="text">
            <TrashIcon className="h-4 w-4" />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
}