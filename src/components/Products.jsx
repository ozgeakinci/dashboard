import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div>Bu bir produks </div>
      <Link to="/" className="underline">
        Go to Home
      </Link>
    </>
  );
};

export default Products;
