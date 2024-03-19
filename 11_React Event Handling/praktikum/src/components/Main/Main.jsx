import Logo from "../../assets/bootstrap.svg";
import React, { useState } from "react";
import "./Main.css";

function Main() {
  function onClick() {
    console.log(Math.random());
  }

  const [productName, setProductName] = useState("");
  const [productNameError, setProductNameError] = useState("");

  const handleProductNameChange = (event) => {
    const value = event.target.value;
    const isValid = value.length <= 10;
    setProductNameError(
      isValid ? "" : "Product Name must be 10 characters or less"
    );
    setProductName(value.slice(0, 10)); // Limit to 10 characters
  };

  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account",
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
    },
  };

  return (
    <>
      <main>
        <div className="d-flex justify-content-center flex-column container text-center col-7">
          <img src={Logo} width={100} className="mx-auto pt-5" />
          <h1>{article.title.en}</h1>
          <p className="fs-3">{article.description.en}</p>
        </div>
        <form action="#">
          <div className="container px-5 w-50 pt-5 mb-5">
            <h4>Detail Product</h4>
            <p className="fw-medium">Product Name</p>
            <input
              required=""
              type="text"
              className={`mb-5 ${productNameError ? "is-invalid" : ""}`}
              style={{ width: "35%" }}
              value={productName}
              onChange={handleProductNameChange}
            />
            {productNameError && (
              <div className="invalid-feedback">{productNameError}</div>
            )}
            <h5>Product Category</h5>
            <select className="form-select w-25 mb-5">
              <option selected="">Choose...</option>
              <option defaultValue={1}>Contoh</option>
            </select>
            <input type="file" className="input" />
            <p>Product Freshness</p>
            <div className="d-flex flex-column mb-5">
              <label htmlFor="brand">
                <input required="" type="radio" name="option" id="brand" />{" "}
                Brand New
              </label>
              <label htmlFor="second">
                <input required="" type="radio" name="option" id="second" />{" "}
                Second Hand
              </label>
              <label htmlFor="refuf">
                <input required="" type="radio" name="option" id="refuf" />{" "}
                Refufbished
              </label>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-primary w-25"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Klik
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">Ini Contoh</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Additional Description</p>
            <textarea
              rows={10}
              className="form-control mb-5"
              defaultValue={""}
            />
            <p>Product price</p>
            <div className="input-group mb-3">
              <span
                className="input-group-text"
                style={{ backgroundColor: "white" }}
              >
                $
              </span>
              <input
                required=""
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
            </div>
            <button
              className="btn btn-primary  d-flex justify-content-center mx-auto mt-5"
              onClick={onClick}
            >
              Example Event Handling
            </button>
            <button
              type="submit"
              className="btn btn-primary w-75 d-flex justify-content-center mx-auto mt-5"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Main;
