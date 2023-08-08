import { useState } from "react";
import useTitle from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddToy = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  useTitle("Add New Toy");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const toy_name = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const picture = form.photoURL.value;
    const seller_name = form.seller_name.value;
    const seller_email = form.seller_email.value;
    const description = form.description.value;
    const toyInfo = {
      toy_name,
      price: `$${price}`,
      quantity,
      picture,
      category,
      seller_name,
      seller_email,
      description,
    };
    fetch("https://botboy.vercel.app/my-toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Confirm",
          });
          navigate("/my-toys");
        }
      });
  };
  return (
    <div className="hero min-h-screen lg:bg-[url('https://i.ibb.co/zSfz9Pf/pattern.png')]">
      <div className="flex-col hero-content">
        <div className="pb-4 text-center">
          <h1 className="text-3xl font-bold lg:text-5xl text-mainColor font-head">
            Create A New Toy !
          </h1>
        </div>
        <div className="border card border-mainColor bg-base-200">
          <form
            onSubmit={handleSubmit}
            className="grid-cols-2 p-10 lg:grid gap-x-8 gap-y-1"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Toy name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                required
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 text-gray-400 dropdown input"
              >
                <option value="">Select</option>
                <option value="marvel">Marvel</option>
                <option value="avengers">Avengers</option>
                <option value="dc">DC</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                required
                placeholder="Add available quantity"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                required
                name="seller_name"
                placeholder="Enter seller name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                required
                name="seller_email"
                placeholder="Enter seller email"
                className="input input-bordered"
              />
            </div>
            <div className="col-span-2 form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                required
                placeholder="Your photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="col-span-2 form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                required
                name="description"
                placeholder="Add some description"
                className="input input-bordered"
              />
            </div>
            <div className="col-span-2 mt-6 form-control">
              {/* {error && (
                <p className="mb-2 text-sm italic font-semibold text-red-600">
                  {error}
                </p>
              )} */}
              <button
                type="submit"
                className="w-full mx-auto text-lg text-white rounded-md lg:w-1/2 lg:px-4 lg:py-2 bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
