import {
  Dialog,
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
} from "@material-tailwind/react";
import getCategoryColor from "../Utils/getCategoryColor";

/**
 * Renders the details of a product in a dialog.
 *
 * @param {object} product - The product object containing the details of the product.
 * @param {boolean} isOpen - Indicates whether the dialog is open or not.
 * @param {function} onClose - Callback function to close the dialog.
 * @return {JSX.Element} - The rendered product details dialog.
 */
export default function ProductDetails({ product, isOpen, onClose }) {
  return (
    <>
      <Dialog open={isOpen} handler={onClose}>
        <Card>
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={product.imageUrl}
              alt="product-img"
              className="h-full w-full object-scale-down object-center"
            />
          </CardHeader>

          <CardBody>
            <div className="mb-2">
              <Typography color="blue-gray" className="text-xl font-medium">
                {product.title}
              </Typography>
            </div>

            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {product.description}
            </Typography>

            <div className="mt-2 flex-row">
              <Typography
                color="blue-gray"
                className="text-sm font-medium italic"
              >
                Prix de base : {product.basePrice.toFixed(2)} €
              </Typography>

              <Typography
                color="blue-gray"
                className="text-sm font-medium italic"
              >
                Prix de vente : {product.salePrice.toFixed(2)} €
              </Typography>
            </div>
          </CardBody>

          <CardFooter>
            <div className="-mt-7 flex gap-2">
              {product.categories.map((category, index) => (
                <Chip
                  key={index}
                  color={getCategoryColor(category)}
                  value={category}
                />
              ))}
            </div>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
