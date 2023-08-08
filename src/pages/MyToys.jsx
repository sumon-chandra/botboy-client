import { useContext, useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import { FaEdit, FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./../context-providers/AuthProvider";
import useTitle from "../hooks/useTitle";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user, loading } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle("My Toys");
  const url = `https://botboy.vercel.app/my-toys?email=${user?.email}`;
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);
  const handleDelete = (id) => {
    fetch(`https://botboy.vercel.app/my-toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "Do you wanna delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                "Deleted!",
                "Your booked service has been deleted.",
                "success"
              );
              const remainingToys = toys.filter((toy) => toy._id !== id);
              setToys(remainingToys);
            }
          });
        }
      });
  };
  return !loading ? (
    <div className="flex items-center justify-center w-full min-h-screen">
      <Circles
        height="80"
        width="80"
        color="#4f46e5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  ) : (
    <>
      <div className="py-6 bg-mainColor">
        <h4 className="text-2xl font-bold text-center text-white lg:text-5xl font-head">
          My Toys
        </h4>
      </div>
      <section className="w-3/4 mx-auto my-10 lg:my-20">
        <div className="items-center hidden grid-cols-12 p-4 mb-6 font-bold rounded-t-lg lg:grid bg-slate-300">
          <p>#</p>
          <p className="col-span-1 ">Image</p>
          <p className="col-span-6">Toy Name</p>
          <p>Price</p>
          <p>Category</p>
          <p className="col-span-2"></p>
        </div>
        {toys.map((toy, index) => (
          <div
            key={toy._id}
            className="relative flex flex-col items-start grid-cols-12 p-4 mb-6 rounded-lg lg:grid lg:items-center bg-slate-100"
          >
            <p className="absolute font-bold lg:static right-2 top-2">
              {index + 1}
            </p>
            <img
              src={toy.picture}
              alt=""
              className="object-cover h-20 col-span-1 w-14"
            />
            <p className="w-11/12 col-span-6 font-bold lg:w-full">
              {toy.toy_name}
            </p>
            <p>
              <span className="lg:hidden">price: </span> {toy.price}
            </p>
            <p>
              <span className="lg:hidden"> Category: </span>{" "}
              {toy.category ? toy.category : "No category selected"}
            </p>
            <div className="absolute flex flex-col items-start justify-end col-span-2 gap-6 lg:flex-row lg:static top-10 right-4">
              <Link to={`/update-toys/${toy._id}`}>
                <FaEdit className="text-xl font-black cursor-pointer text-secColor" />
              </Link>
              <span onClick={() => handleDelete(toy._id)}>
                <FaTrashAlt className="text-xl font-black cursor-pointer text-secColor" />
              </span>
              <Link to={`/toys/personal${toy._id}`}>
                <FaExternalLinkAlt className="text-xl font-black cursor-pointer text-secColor" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default MyToys;
