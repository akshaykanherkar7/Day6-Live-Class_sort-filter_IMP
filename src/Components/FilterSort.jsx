import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category"); //when we copy URL from 1 tab to another tab It shows same Page bcz of this
  const urlSort = searchParams.get("sortBy"); //when we copy URL from 1 tab to another tab It shows same Page bcz of this
  const [category, setCategory] = useState(urlCategory || []); //when we copy URL from 1 tab to another tab It shows same Page bcz of this
  const [sortBy, setSortBy] = useState(urlSort || ""); //when we copy URL from 1 tab to another tab It shows same Page bcz of this

  const handleCheckbox = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);

      setSearchParams(params);
    }
  }, [category, setSearchParams,sortBy]);

  // useEffect(() => {
  //   if (sortBy) {
  //     const params = {
  //       category: searchParams.getAll("category"),
  //       sortBy,
  //     };
  //     setSearchParams(params);
  //   }
  // }, [searchParams, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            onChange={handleCheckbox}
            defaultChecked={category.includes("Novel")}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            onChange={handleCheckbox}
            defaultChecked={category.includes("Science_Fiction")}
          />
          <label>Science_Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            onChange={handleCheckbox}
            defaultChecked={category.includes("Motivational")}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            onChange={handleCheckbox}
            defaultChecked={category.includes("Thriller")}
          />
          <label>Thriller</label>
        </div>
      </div>

      <h3>Sort</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sortBy === "asc"}
        />
        Ascending
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sortBy === "desc"}
        />
        Descending
      </div>
    </div>
  );
};

export default FilterSort;
