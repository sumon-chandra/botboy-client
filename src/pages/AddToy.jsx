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
      <div className="hero-content flex-col">
        <div className="text-center pb-4">
          <h1 className="lg:text-5xl text-3xl text-mainColor font-bold">
            Create A New Toy !
          </h1>
        </div>
        <div className="card border border-mainColor bg-base-200">
          <form
            onSubmit={handleSubmit}
            className="lg:grid grid-cols-2 p-10 gap-x-8 gap-y-1"
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
                className="dropdown w-full p-3 input text-gray-400"
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
            <div className="form-control col-span-2">
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
            <div className="form-control col-span-2">
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
            <div className="form-control mt-6 col-span-2">
              {/* {error && (
                <p className="text-red-600 text-sm font-semibold italic mb-2">
                  {error}
                </p>
              )} */}
              <button
                type="submit"
                className="w-full lg:w-1/2 mx-auto lg:px-4 lg:py-2 text-lg text-white bg-gradient-to-br from-mainColor to-secColor rounded-md hover:bg-gradient-to-tl"
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
