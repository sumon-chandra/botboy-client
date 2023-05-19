import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const CategoryTabs = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("marvel");

  useEffect(() => {
    fetch(`https://botboy.vercel.app/toys-category?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  const DisplayToys = ({ toys }) => {
    return (
      <div className="lg:flex justify-between items-center gap-6 lg:pt-10">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="card w-full shadow-xl border border-indigo-50 rounded-lg z-0"
          >
            <figure className="h-72">
              <img
                src={toy.picture}
                alt={toy.toy_name}
                className="w-32 hover:scale-150 duration-[3000ms] z-10"
              />
            </figure>
            <div className="card-body">
              <h5 className="card-title text-mainColor">{toy.toy_name}</h5>
              <div className="flex justify-between items-center py-2">
                <p className="text-xl font-bold">{toy.price}</p>
                <p className="flex items-center gap-x-2 font-bold text-sm">
                  <ReactStars size={20} value={toy.rating} edit={false} />
                  <span>{toy.rating}</span>
                </p>
              </div>
              <Link
                to="/"
                className="text-center px-4 py-2 text-lg text-white bg-gradient-to-br from-mainColor to-secColor rounded-md hover:bg-gradient-to-tl border-0"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="lg:px-20 px-4 lg:py-20 py-10">
      <div className="text-center">
        <p className="text-[12px]">Categories</p>
        <h4 className="lg:text-5xl text-2xl font-bold text-mainColor">
          Explore Our Categories
        </h4>
      </div>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("marvel")}>Marvel</Tab>
          <Tab onClick={() => setCategory("avengers")}>Avengers</Tab>
          <Tab onClick={() => setCategory("dc")}>DC</Tab>
        </TabList>

        <TabPanel>
          <DisplayToys toys={toys} />
        </TabPanel>
        <TabPanel>
          <DisplayToys toys={toys} />
        </TabPanel>
        <TabPanel>
          <DisplayToys toys={toys} />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryTabs;
