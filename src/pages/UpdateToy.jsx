import { useState } from "react";
import useTitle from "../hooks/useTitle";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const [category, setCategory] = useState("");
  const { id } = useParams();
  useTitle("Add New Toy");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const updateInfo = { price, quantity, category };
    fetch(`https://botboy.vercel.app/my-toys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "Do you wanna update this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                "Update!",
                "Your booked service has been Updated.",
                "success"
              );
              navigate("/my-toys");
            }
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen lg:py-20 py-10 lg:bg-[url('https://i.ibb.co/zSfz9Pf/pattern.png')]">
      <div className="flex-col hero-content">
        <div className="pb-4 text-center">
          <h1 className="text-3xl font-bold lg:text-5xl font-head text-mainColor">
            Create A New Toy !
          </h1>
        </div>
        <div className="card border border-mainColor bg-base-200 lg:w-[500px]">
          <form onSubmit={handleSubmit} className="p-10 gap-x-8 gap-y-1">
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
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="picture"
                placeholder="Your photo URL"
                className="input input-bordered"
              />
            </div> */}
            <div className="mt-6 form-control">
              <button
                type="submit"
                className="w-full mx-auto text-lg text-white rounded-md lg:w-1/2 lg:px-4 lg:py-2 bg-gradient-to-br from-mainColor to-secColor hover:bg-gradient-to-tl"
              >
                Update Toy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
