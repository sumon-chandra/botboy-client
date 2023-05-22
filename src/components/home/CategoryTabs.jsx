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
      <div className="lg:flex justify-between items-center gap-6 lg:pt-10">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    );
  };

  return (
    <section className="lg:px-20 px-4 lg:py-20 py-10">
      <div data-aos="fade-up" data-aos-duration="1000" className="text-center">
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
      <p
        data-aos="fade-up"
        data-aos-duration="1000"
        className="underline select-none w-40 mt-8 text-sm text-mainColor justify-end items-center flex gap-x-2 cursor-pointer"
      >
        <span>See More Categories</span>
        <BsArrowUpRightSquare />
      </p>
    </section>
  );
};

export default CategoryTabs;
