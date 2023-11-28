function Footer(props) {
  return (
    <>
      <div className="container text-center p-3   ">
        <div className="row mt-2 ">
          <button
            type="button"
            className="btn btn-outline-danger  "
            onClick={() => {
              props.reset();
            }}
          >
            Reset
          </button>
          <button type="button" className="btn btn-success mt-3 ">
            Total Payable Amount - ₹{props.totalAmount}
          </button>
        </div>
      </div>
    </>
  );
}

export default Footer;
