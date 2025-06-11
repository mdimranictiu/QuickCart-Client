import { useState, useEffect, useRef } from "react";
import ReactStars from "react-stars";
import '../css/custom.css';

const FilterSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && sidebarRef.current) {
      sidebarRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isOpen]);

  const Categories = [
    { id: 1, name: "Clothes", slug: "clothes", subcategories: ["T-Shirt", "Shirt", "Pants", "Jacket", "Saree", "Kurti"], description: "Men's and women's fashionable clothing." },
    { id: 2, name: "Electronics", slug: "electronics", subcategories: ["Mobile", "Laptop", "Headphones", "Smartwatch", "TV"], description: "Smart gadgets and essential electronics." },
    { id: 3, name: "Food", slug: "food", subcategories: ["Snacks", "Fast Food", "Grocery", "Beverages", "Fruits"], description: "Delicious food, drinks and groceries." },
    { id: 4, name: "Home & Living", slug: "home-living", subcategories: ["Furniture", "Decor", "Lighting", "Bedding"], description: "Make your home more comfortable and stylish." },
    { id: 5, name: "Beauty & Health", slug: "beauty-health", subcategories: ["Skincare", "Haircare", "Makeup", "Medicine"], description: "Care for your beauty and wellness." },
    { id: 6, name: "Sports & Outdoors", slug: "sports-outdoors", subcategories: ["Gym Equipment", "Cycling", "Camping", "Cricket"], description: "All your fitness and outdoor gear." },
    { id: 7, name: "Toys & Kids", slug: "toys-kids", subcategories: ["Toys", "Games", "School Supplies", "Baby Care"], description: "Fun, safe and educational items for kids." },
    { id: 8, name: "Books & Stationery", slug: "books-stationery", subcategories: ["Story Books", "Educational", "Office Items", "Journals"], description: "Everything for students and book lovers." },
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

  const filterRating = [
    { id: 1, count: 5 },
    { id: 2, count: 4 },
    { id: 3, count: 3 },
    { id: 4, count: 2 },
    { id: 5, count: 1 },
  ];

  const onCategoryChange = (slug) => {
    console.log("Category selected:", slug);
  };

  return (
    <div>
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-32 left-0 z-50 bg-[#00BADB] text-white rounded-r-2xl py-3 px-4 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "ml-[290px]" : "ml-0"
        }`}
      >
        {isOpen ? "Close" : "Filters"}
      </button>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-[300px] hide-scrollbar bg-white shadow-lg z-40 transition-transform duration-300 ease-in-out h-screen overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Scrollable content */}
        <div className="p-6 h-full overflow-y-auto">
          {/* Categories */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Categories</h2>
            <hr className="mb-4" />
            <ul className="space-y-2">
              {Categories.map((cat) => (
                <li key={cat.id}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat.slug}
                      onChange={() => onCategoryChange(cat.slug)}
                    />
                    <span>{cat.name}</span> {/* আইকন বাদ দিলাম */}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Price Range</h2>
            <hr className="mb-4" />
            <ul className="space-y-2">
              {priceRanges.map((range) => (
                <li key={range.id}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="price" value={range.id} />
                    <span>{range.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Discount Offer */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Discount Offer</h2>
            <hr className="mb-4" />
            <ul className="space-y-2">
              {disCountOffer.map((discount) => (
                <li key={discount.id}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="discount" value={discount.id} />
                    <span>{discount.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Filter By Rating */}
          <div>
            <h2 className="text-xl font-bold mb-2">Filter By Rating</h2>
            <hr className="mb-4" />
            <ul className="space-y-2">
              {filterRating.map((rating) => (
                <li key={rating.id}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="radio" name="rating" value={rating.id} />
                    <ReactStars
                      count={5}
                      value={rating.count}
                      size={24}
                      color2={"#FF9932"}
                      edit={false}
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
