import { useEffect, useState } from "react";
import ToyCard from "./../components/ToyCard";
import useTitle from "../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useTitle("All Toys");
  useEffect(() => {
    fetch("https://botboy.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <>
      <header className="bg-mainColor py-6">
        <h1>All Toys</h1>
      </header>
      <main className="lg:grid grid-cols-4 gap-x-4 gap-y-7 px-4 lg:px-20 py-20">
        {toys.map((toy) => (
          <ToyCard toy={toy} key={toy._id} />
        ))}
      </main>
    </>
  );
};

export default AllToys;
