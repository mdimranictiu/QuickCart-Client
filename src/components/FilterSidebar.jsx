import { useState } from "react";
import ReactStars from "react-stars";
import '../css/custom.css';

const FilterSidebar = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const Categories = [
    {
      id: 1,
      name: "Clothes",
      slug: "clothes",
      icon: "👕",
      subcategories: ["T-Shirt", "Shirt", "Pants", "Jacket", "Saree", "Kurti"],
      description: "Men's and women's fashionable clothing.",
    },
    {
      id: 2,
      name: "Electronics",
      slug: "electronics",
      icon: "💻",
      subcategories: ["Mobile", "Laptop", "Headphones", "Smartwatch", "TV"],
      description: "Smart gadgets and essential electronics.",
    },
    {
      id: 3,
      name: "Food",
      slug: "food",
      icon: "🍔",
      subcategories: ["Snacks", "Fast Food", "Grocery", "Beverages", "Fruits"],
      description: "Delicious food, drinks and groceries.",
    },
    {
      id: 4,
      name: "Home & Living",
      slug: "home-living",
      icon: "🛋️",
      subcategories: ["Furniture", "Decor", "Lighting", "Bedding"],
      description: "Make your home more comfortable and stylish.",
    },
    {
      id: 5,
      name: "Beauty & Health",
      slug: "beauty-health",
      icon: "💄",
      subcategories: ["Skincare", "Haircare", "Makeup", "Medicine"],
      description: "Care for your beauty and wellness.",
    },
    {
      id: 6,
      name: "Sports & Outdoors",
      slug: "sports-outdoors",
      icon: "⚽",
      subcategories: ["Gym Equipment", "Cycling", "Camping", "Cricket"],
      description: "All your fitness and outdoor gear.",
    },
    {
      id: 7,
      name: "Toys & Kids",
      slug: "toys-kids",
      icon: "🧸",
      subcategories: ["Toys", "Games", "School Supplies", "Baby Care"],
      description: "Fun, safe and educational items for kids.",
    },
    {
      id: 8,
      name: "Books & Stationery",
      slug: "books-stationery",
      icon: "📚",
      subcategories: ["Story Books", "Educational", "Office Items", "Journals"],
      description: "Everything for students and book lovers.",
    },
  ];
  const priceRanges = [
    { id: 1, label: "Under ৳500", min: 0, max: 500 },
    { id: 2, label: "৳500 – ৳1000", min: 500, max: 1000 },
    { id: 3, label: "৳1000 – ৳2000", min: 1000, max: 2000 },
    { id: 4, label: "৳2000 – ৳5000", min: 2000, max: 5000 },
    { id: 5, label: "Above ৳5000", min: 5000, max: Infinity },
  ];
  const disCountOffer = [
    { id: 1, label: "20% Discount" },
    { id: 2, label: "30% Discount" },
    { id: 3, label: "40% Discount" },
    { id: 4, label: "50% Discount or Above" },
   
  ];
  const filterRating=[
    {id:1,count:5},
    {id:2,count:4},
    {id:3,count:3},
    {id:4,count:2},
    {id:5,count:1}
  ]


  return (
    <div className="w-[200px] min-h-screen my-10 ">
      <div className="relative">
<div
  onClick={toggleSidebar}
  className={`text-center  text-xl bg-[#00BADB] mt-[50px] absolute border-l-5 border-[#e3e4e5] rounded-r-2xl py-10 px-5 transition-all duration-300 ease-in-out ${isOpen ? 'ml-[300px]' : ''}`}
>
     
    </div>

      <div
        className={`left-0  w-[300px] bg-white shadow-lg hide-scrollbar overflow-y-scroll h-[800px] transition-transform duration-300  z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
          <div className="p-10">
            <div><h2 className="text-xl font-bold mb-2">Categories</h2>
            <hr className="w-48 py-2" />
            <ul className="space-y-1 mb-5">
              {Categories.map((cat) => (
                <li key={cat?.id}>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="category"
                      value={cat.slug}
                      // checked={selectedCategory === cat.slug}
                      onChange={() => onCategoryChange(cat.slug)}
                    />
                    <span>{cat.name}</span>
                  </label>
                </li>
              ))}
            </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Price Range</h2>
              <hr className="w-48 py-2" />

              <ul>
                {priceRanges.map((range) => (
                  <li key={range.id}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="price"
                        value={range.id}
                        // checked={selectedPrice?.id === range.id}
                        // onChange={() => setSelectedPrice(range)}
                      />
                      <span>{range.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-3">
              <h2 className="text-xl font-bold mb-2">Discount Offer</h2>
              <hr className="w-48 py-2" />

              <ul>
                {disCountOffer.map((discount) => (
                  <li key={discount.id}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="price"
                        value={discount.id}
                        // checked={selectedPrice?.id === range.id}
                        // onChange={() => setSelectedPrice(range)}
                      />
                      <span>{discount.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-3">
              <h2 className="text-xl font-bold mb-2">Filter By Rating</h2>
              <hr className="w-48 py-2" />

              <ul>
                {filterRating.map((rating) => (
                  <li key={rating.id}>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="price"
                        value={rating.id}
                        // checked={selectedPrice?.id === range.id}
                        // onChange={() => setSelectedPrice(range)}
                      />
<ReactStars
  count={5}
  value={rating.count}
//   onChange={ratingChanged}
  size={24}
  color2={'#FF9932'} />

                      <span>{rating?.label}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
