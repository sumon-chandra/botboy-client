import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ToyCard from "./../components/ToyCard";
import useTitle from "../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [error, setError] = useState("");
  const [sortedValue, setSortedValue] = useState("");
  useTitle("All Toys");

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    const filteredToys = toys.filter((toy) =>
      toy.toy_name.toLowerCase().includes(text.toLowerCase())
    );
    if (filteredToys.length === 0) {
      setError("No toys found");
    } else {
      setToys(filteredToys);
      setError("");
      e.target.text.value = "";
    }
  };

  useEffect(() => {
    fetch(`https://botboy.vercel.app/toys?sorting=${sortedValue}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [sortedValue]);
  return (
    <>
      <header className="bg-mainColor py-6 flex flex-col justify-center items-center gap-4 relative">
        <h4 className="lg:text-5xl text-2xl font-bold text-white">All Toys</h4>
        <div className="form-control">
          <form
            onSubmit={handleSearch}
            className="input-group  border-4 border-secColor rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="text"
              placeholder="Search…"
              className="px-6 text-xs focus:outline-0 "
            />
            <button
              type="submit"
              className="btn btn-sm border-l-2 border-r-0 border-b-0 border-t-0 border-secColor bg-white hover:bg-gray-100 text-mainColor text-xl font-black"
            >
              <FiSearch />
            </button>
          </form>
        </div>
        <select
          value={sortedValue}
          onChange={(e) => setSortedValue(e.target.value)}
          className="absolute top-1 lg:bottom-4 lg:right-20 right-1 lg:input"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </header>

      {error ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="bg-slate-100 p-6">
            <p>
              <span className="text-red-500 text-4xl font-black">
                {error} !
              </span>
            </p>
            <p>Please type toy name correctly.</p>
          </div>
        </div>
      ) : (
        <main className="lg:grid grid-cols-4 gap-x-4 gap-y-7 px-4 lg:px-20 py-20">
          {toys.map((toy) => (
            <ToyCard allToys={true} toy={toy} key={toy._id} />
          ))}
        </main>
      )}
    </>
  );
};

export default AllToys;
