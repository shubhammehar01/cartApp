import React from "react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addProduct(
              this.state.productName,
              Number(this.state.productPrice)
            );
            this.setState({ productName: "", productPrice: 0 });
          }}
        >
          <div className="form-group col">
            <label htmlFor="text">Product Title</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter title of the Product"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
              required
            />
          </div>
          <div className="form-group col">
            <label htmlFor="number">Price </label>
            <input
              type="number"
              className="form-control bg-light"
              placeholder="enter price of the product"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: Number(e.currentTarget.value) });
              }}
              value={Number(this.state.productPrice)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-primary p-0 col-2">
            Add New product
          </button>
        </form>
      </div>
    );
  }
}
export default AddProduct;
