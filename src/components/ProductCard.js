import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductCard = ({ pd }) => {
  const { id,name, img, price, category, ratings } = pd;
  return (
    <Card className="w-80 h-full">
      <CardHeader color="purple" className="relative h-56">
        <img src={img} alt="product-img" className="h-full w-full" />
      </CardHeader>
      <CardBody>
        <Typography className="mb-2 text-purple-500 text-xl font-semibold">
          {name}
        </Typography>
        <Typography className="font-semibold">
          Price: ${price}
          <br />
          Category: {category}
          <br />
          Ratings: {ratings}
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Button size="sm" color="purple">Buy Now</Button>
        <Link to={`/product/${id}`}><Button size="sm" color="green">Details</Button></Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
