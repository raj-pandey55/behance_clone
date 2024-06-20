import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaSlidersH } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";

const SearchBar = () => {
  const suggestions = ["logo", "typography", "ui", "car", "case study"];

  const searchItems = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Iceberg",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tomato",
    "Ugli fruit",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yam",
    "Zucchini",
    "logo",
    "typography",
    "ui",
    "car",
    "case study",
    "web design",
    "branding",
    "poster",
    "illustration",
    "app design",
    "icon",
    "packaging",
    "motion",
    "animation",
    "photography",
    "editorial",
    "3d",
    "architecture",
    "fashion",
    "product design",
    "advertising",
    "art direction",
    "graphic design",
    "interaction design",
    "street art",
    "street photography",
    "street fashion",
    "street style",
    "street food",
    "street dance",
    "queen",
    "horse",
    "rat",
  ];

  const [searchList, setSearchList] = useState([]);

  function handleSearch(e) {
    const search = e.target.value;

    if (search === "") {
      setSearchList([...suggestions]);
      return;
    }

    const searchList = searchItems.filter((items) =>
      items.toLowerCase().startsWith(search.toLowerCase())
    );
    setSearchList(searchList);
  }

  return (
    <div>
      <div className="w-100 py-2 px-5 align-middle border-b font-acumin-pro text-m flex items-center justify-between my-3">
        <div className="filter cursor-pointer px-8 font-bold py-3 gap-2 bg-[#fff] border rounded-full flex items-center justify-between hover:bg-[#f5f5f5]">
          <div className="filter-icon">
            <FaSlidersH />
          </div>
          <span>Filter</span>
        </div>
        <div className="search-bar border rounded-full flex items-center justify-between flex-col w-full bg-[#f9f9f9] py-1 ml-3 mx-3 relative">
          <div className="flex items-center justify-between w-full">
            <div className="search-bar-left flex items-center cursor-pointer flex-1">
              <div className="flex ml-3 items-center bg-transparent">
                <IoSearch />
              </div>
              <input
                className="ml-2 font-bold bg-transparent w-full outline-none placeholder:font-bold placeholder:text-[#000]"
                type="text"
                placeholder="Search the creative world at work"
                onClick={handleSearch}
                onKeyUp={handleSearch}
                onBlur={() => setSearchList([])}
              />
            </div>
            <button className="search-bar-right border flex items-center justify-center bg-white rounded-full py-2 px-3 mr-1 hover:bg-[#f5f5f5]">
              <CiImageOn />
              <p className="ml-2 font-bold bg-transparent">Search by Image</p>
            </button>
          </div>
          {searchList.length !== 0 ? (
            <div className="search-drop-down absolute border -bottom-4 left-0 px-5 py-5 rounded-2xl shadow-md">
              <p className="text-xs px-5 font-bold text-[#696969]">
                SUGGESTIVE SEARCHES
              </p>
              <ul className="">
                {searchList.map((search) => (
                  <li className="search-bar-suggestions rounded font-bold">
                    <div className="px-1 py-1">{search}</div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="sort-item relative">
          <div className="text-xs absolute z-1 bg-white -top-2 left-7 font-bold text-[#626161]">
            <p className="">Sort</p>
          </div>
          <div className="px-4 py-3 rounded-full border justify-between hover:border-black ">
            <select className="text-sm font-bold outline-none">
              <option value="1" className="sort-items">
                Recommended
              </option>
              <option value="2" className="sort-items">
                {" "}
                Curated{" "}
              </option>
              <option value="3" className="sort-items">
                {" "}
                Most Appretciated{" "}
              </option>
              <option value="4" className="sort-items">
                {" "}
                Most Viewed{" "}
              </option>
              <option value="5" className="sort-items">
                {" "}
                Most Discussed{" "}
              </option>
              <option value="6" className="sort-items">
                {" "}
                Most Recent{" "}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
