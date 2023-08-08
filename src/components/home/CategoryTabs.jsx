import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ToyCard from "../ToyCard";
import { BsArrowUpRightSquare } from "react-icons/bs";

const CategoryTabs = () => {
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("marvel");

  useEffect(() => {
    fetch(`https://botboy.vercel.app/toys-category?category=${category}`)
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 4)));
  }, [category]);

  const DisplayToys = ({ toys }) => {
    return (
      <div className="items-center justify-between gap-6 lg:flex lg:pt-10">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    );
  };

  return (
    <section className="px-4 py-10 lg:px-20 lg:py-20">
      <div className="text-center">
        <p className="text-[12px]">Categories</p>
        <h4 className="text-2xl font-bold lg:text-5xl text-mainColor font-head">
          Explore Our Categories
        </h4>
      </div>
      <Tabs className="mt-8 lg:mt-20">
        <TabList className="flex items-center justify-center home-tabs">
          <Tab className="tab-btn" onClick={() => setCategory("marvel")}>
            Marvel
          </Tab>
          <Tab className="tab-btn" onClick={() => setCategory("avengers")}>
            Avengers
          </Tab>
          <Tab className="tab-btn" onClick={() => setCategory("dc")}>
            DC
          </Tab>
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
      <p className="flex items-center justify-end w-40 mt-8 text-sm underline cursor-pointer select-none text-mainColor gap-x-2">
        <span>See More Categories</span>
        <BsArrowUpRightSquare />
      </p>
    </section>
  );
};

export default CategoryTabs;
