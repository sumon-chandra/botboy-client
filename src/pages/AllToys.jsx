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
      <header className="relative flex flex-col items-center justify-center gap-4 py-6 bg-mainColor">
        <h4 className="text-2xl font-bold text-white lg:text-5xl font-head">
          All Toys
        </h4>
        <div className="form-control">
          <form
            onSubmit={handleSearch}
            className="border-4 rounded-lg shadow-lg input-group border-secColor"
          >
            <input
              type="text"
              name="text"
              placeholder="Search…"
              className="px-6 text-xs focus:outline-0 "
            />
            <button
              type="submit"
              className="text-xl font-black bg-white border-t-0 border-b-0 border-l-2 border-r-0 btn btn-sm border-secColor hover:bg-gray-100 text-mainColor"
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
        <div className="flex items-center justify-center min-h-screen">
          <div className="p-6 bg-slate-100">
            <p>
              <span className="text-4xl font-black text-red-500">
                {error} !
              </span>
            </p>
            <p>Please type toy name correctly.</p>
          </div>
        </div>
      ) : (
        <main className="grid-cols-4 px-4 py-20 lg:grid gap-x-4 gap-y-7 lg:px-20">
          {toys.map((toy) => (
            <ToyCard allToys={true} toy={toy} key={toy._id} />
          ))}
        </main>
      )}
    </>
  );
};

export default AllToys;
