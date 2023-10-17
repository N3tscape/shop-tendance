import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
import { addProduct } from "../actions/product.action";

const TABLE_HEAD = [
  "Désignation",
  "Catégories",
  "Prix de base",
  "Prix de vente",
  "",
];
export default function ProductTable() {
  const products = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  const [isProductDialogOpen, setProductDialogOpen] = useState(false);

  const openProductDialog = () => {
    setProductDialogOpen(true);
  };

  const closeProductDialog = () => {
    setProductDialogOpen(false);
  };

  const handleProductSubmit = (productData) => {
    dispatch(addProduct(productData))
      .then(() => {
        closeProductDialog();
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout du produit :", error);
      });
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-4 my-2">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des produits
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Informations relative à l’ensemble des produits
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 md:flex-row">
            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={openProductDialog}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter un
              produit
            </Button>

            {isProductDialogOpen && (
              <ProductForm
                isOpen={isProductDialogOpen}
                onClose={closeProductDialog}
                onSubmit={handleProductSubmit}
              />
            )}

            <div className="w-full md:w-72">
              <Input
                label="Rechercher"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody className="p-0 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductItem product={product} key={index} />
            ))}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-start border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Nombre de produits : {products.length}
        </Typography>
      </CardFooter>
    </Card>
  );
}
