// import CarouselComponent from "@/components/home/Carousel";
// import CartHome from "@/components/home/Cart";
// import React, { useEffect } from "react";
// import product from "../components/store/cartData.json";

// const index = () => {
//   let categories = new Set();
//   const foodData = [];
//   const handleData = () => {
//     product.map((data) => {
//       return foodData.push(data), categories.add(data.category);
//     });
//     // console.log("categories", categories, foodData);
//   };
//   const categoryArray = [...categories];
//   console.log("product....", product);
//   // useEffect(() => {
//   handleData();
//   // }, []);

//   return (
//     <div>
//       <CarouselComponent />
//       {categoryArray.map((category) => {
//         return (
//           <>
//             <div key={category}>{category}</div>
//             <hr />
//             <div>
//               {foodData
//                 .filter((foodDatas) => category === foodDatas.category)
//                 .map((data) => {
//                   <CartHome key={data} products={data} />;
//                 })}
//             </div>
//           </>
//         );
//       })}
//       {/* <CartHome /> */}
//     </div>
//   );
// };

// export default index;

// import CarouselComponent from "@/components/home/Carousel";
// import CartHome from "@/components/home/Cart";
// import React, { useEffect, useState } from "react";
// import product from "../components/store/cartData.json";

// const Index = () => {
//   // const [categories, setCategories] = useState([]);
//   // const [foodData, setFoodData] = useState([]);

//   // useEffect(() => {
//   //   const categorySet = new Set();
//   //   const foodArray = [];

//   //   product.forEach((data) => {
//   //     foodArray.push(data);
//   //     categorySet.add(data.category);
//   //   });

//   //   setCategories([...categorySet]); // Convert Set to array
//   //   setFoodData(foodArray);
//   // }, []);

//   let categories = new Set();
//   let foodData = [];
//   let categoryArray;
//   const handleData = () => {
//     product.map((data) => {
//       return foodData.push(data), categories.add(data.category);
//     });
//   };
//   handleData();
//   categoryArray = [...categories];
//   console.log("categoryArray", categoryArray);
//   return (
//     <div>
//       <CarouselComponent />
//       {categoryArray.map((category) => (
//         <div key={category} className="store">
//           <h2>{category}</h2>
//           <hr />
//           <div>
//             {foodData
//               .filter((item) => item.category === category)
//               .map((data) =>
//                 // <CartHome key={data.id} products={data} />
//                 console.log(data)
//               )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Index;

import CarouselComponent from "@/components/home/Carousel";
import React, { useEffect, useState } from "react";
import product from "../components/store/cartData.json";
import CartHome from "@/components/home/Carts";
import { FaLeaf, FaDrumstickBite, FaList } from "react-icons/fa";
import Select from "react-select";
const Index = () => {
  let categories = new Set();
  let foodData = [];
  let categoryArray;

  const [selectedFilter, setSelectedFilter] = useState("All");
  const filterOptions = [
    {
      value: "All",
      label: (
        <div className="flex items-center">
          <FaList className="mr-2 text-gray-900" />
          All Items
        </div>
      ),
    },
    {
      value: "veg",
      label: (
        <div className="flex items-center">
          <FaLeaf className="mr-2 text-green-900" />
          Vegetarian Only
        </div>
      ),
    },
    {
      value: "non-veg",
      label: (
        <div className="flex items-center">
          <FaDrumstickBite className="mr-2 text-red-900" />
          Non-Vegetarian Only
        </div>
      ),
    },
  ];
  const handleData = () => {
    product.map((data) => {
      foodData.push(data);
      categories.add(data.category);
    });
  };

  handleData();
  categoryArray = [...categories];
  // console.log("categoryArray", categoryArray, foodData);
  let store;
  if (selectedFilter === "All") {
    store = foodData;
  } else {
    store = foodData.filter((val) => val?.foodType === selectedFilter);
  }
  // console.log(store, "store", selectedFilter);
  return (
    <div>
      <div className="my-4" style={{color:"black"}}>
        <label htmlFor="filter" className="text-xl font-bold mr-4" style={{color:"White"}}>
          Filter:
        </label>
        <Select
          id="filter"
          options={filterOptions}
          value={filterOptions.find((opt) => opt.value === selectedFilter)}
          onChange={(selectedOption) => setSelectedFilter(selectedOption.value)}
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>
      <CarouselComponent />

      {categoryArray.map((category) => {
        const filteredData = store.filter(
          (foodDatas) => category === foodDatas.category
        );

        return (
          <div key={category}>
            <h2 className="text-4xl mt-10 uppercase font-bold">{category}</h2>
            <hr />
            <div>
              <CartHome products={filteredData} />
            </div>
          </div>
        );
      })}
    </div> 
  );
};

export default Index;
