
import React, { useEffect, useState } from "react";
import CarouselComponent from "@/components/home/Carousel";
import products from "../components/store/cartData.json";
import CartHome from "@/components/home/CartHome";
import { FaGlobe, FaLeaf, FaDrumstickBite } from "react-icons/fa";
const index = () => {
  const [SelectOption, setSelectOption] = useState("All");
  let categories = new Set();
  let foodData = [];
  console.log("products", products);

  const handleData = () => {
    products.map((data) => {
      return foodData.push(data), categories.add(data?.category);
    });
  };

  handleData();
  let categoriesArray = [...categories];
  console.log(categories, foodData), categoriesArray;
  return (
    <div>
      <>
        <CarouselComponent />
        <div className="flex space-x-4 justify-center my-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition duration-200"
            onClick={() => setSelectOption("All")}
          >
            <FaGlobe className="text-lg" />
            All
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded shadow-md hover:bg-green-700 transition duration-200"
            onClick={() => setSelectOption("veg")}
          >
            <FaLeaf className="text-lg" />
            Veg
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded shadow-md hover:bg-red-700 transition duration-200"
            onClick={() => setSelectOption("non-veg")}
          >
            <FaDrumstickBite className="text-lg" />
            Non-Veg
          </button>
        </div>
        {categoriesArray.map((value, index) => {
          const foodDataStore = foodData?.filter(
            (data) => data.category === value
          );
          const StoreNewData =
            SelectOption === "All"
              ? foodDataStore
              : foodDataStore.filter((data) => SelectOption === data.foodType);
          console.log(StoreNewData, "StoreNewData");
          return (
            <>
              <div
                key={index}
                className="text-4xl mt-10  mb-3 uppercase font-bold"
              >
                {value}
              </div>
              <hr />

              <CartHome products={StoreNewData} SelectOption={SelectOption} />
            </>
          );
        })}
      </>
    </div>
  );
};

export default index;
