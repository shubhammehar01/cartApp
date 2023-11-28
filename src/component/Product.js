import "./Product.css";

function Product(props) {
  console.log(props);
  return (
    <>
      <div className="container">
        <p>Name of the Product - {props.Product.name}</p>
        <p>Price - ₹{props.Product.price}</p>
        <div
          className="btn-group text-center"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => {
              props.decreamentQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="text" className="btn btn-outline-primary">
            {props.Product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => {
              props.increamentQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
        <button type="button" className="btn btn-outline-primary m-3">
          {" "}
          Total Price = ₹{props.Product.quantity * props.Product.price}
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => {
            props.removeProduct(props.index);
          }}
        >
          {" "}
          Remove Product
        </button>
      </div>
    </>
  );
}
export default Product;
