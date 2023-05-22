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
    <div className="w-full min-h-screen flex items-center justify-center">
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
      <div className="bg-mainColor py-6">
        <h4 className="lg:text-5xl text-2xl font-bold text-white text-center">
          My Toys
        </h4>
      </div>
      <section className="w-3/4 mx-auto lg:my-20 my-10">
        <div className="lg:grid hidden grid-cols-12 items-center mb-6 bg-slate-300 p-4 font-bold rounded-t-lg">
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
            className="relative lg:grid grid-cols-12 lg:items-center items-start mb-6 bg-slate-100 p-4 flex flex-col rounded-lg"
          >
            <p className="font-bold lg:static absolute right-2 top-2">
              {index + 1}
            </p>
            <img
              src={toy.picture}
              alt=""
              className="w-14 h-20 col-span-1 object-cover"
            />
            <p className="font-bold col-span-6 lg:w-full w-11/12">
              {toy.toy_name}
            </p>
            <p>
              <span className="lg:hidden">price: </span> {toy.price}
            </p>
            <p>
              <span className="lg:hidden"> Category: </span>{" "}
              {toy.category ? toy.category : "No category selected"}
            </p>
            <div className="col-span-2 flex lg:flex-row justify-end gap-6 items-start lg:static absolute top-10 right-4 flex-col">
              <Link to={`/update-toys/${toy._id}`}>
                <FaEdit className="text-xl font-black text-secColor cursor-pointer" />
              </Link>
              <span onClick={() => handleDelete(toy._id)}>
                <FaTrashAlt className="text-xl font-black text-secColor cursor-pointer" />
              </span>
              <Link to={`/toys/personal${toy._id}`}>
                <FaExternalLinkAlt className="text-xl font-black text-secColor cursor-pointer" />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default MyToys;
