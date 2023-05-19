import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const CategoryTabs = () => {
  const [toys, setToys] = useState([])
  const [category, setCategory] = useState("marvel")
  
  useEffect(()=> {
     fetch(`https://botboy.vercel.app/toys-category?category=${category}`)
    .then((res) => res.json())
    .then((data) => setToys(data))
  }, [category])

  const LoadToys = ({toys}) => {
    return (
      <>
      {
        toys.map((toy) => (
          <div key={toy._id}>
            <p className="text-[12px]">{toy.toy_name}</p>
          </div>
        ))
      }
      </>
    )
  }

  return (
    <section className="lg:px-20 px-4 lg:py-20 py-10">
      <div className="text-center">
        <p className="text-[12px]">Categories</p>
        <h4 className="lg:text-5xl text-2xl font-bold text-mainColor">
          Explore Our Category
        </h4>
      </div>
      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory("marvel")}>Marvel</Tab>
          <Tab onClick={() => setCategory("avengers")}>Avengers</Tab>
          <Tab onClick={() => setCategory("dc")}>DC</Tab>
        </TabList>

        <TabPanel>
           <LoadToys toys={toys} />
        </TabPanel>
        <TabPanel>
          <LoadToys toys={toys} />
        </TabPanel>
        <TabPanel>
           <LoadToys toys={toys} />
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default CategoryTabs;
