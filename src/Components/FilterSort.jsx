import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBookAPI } from "../Redux/action";

const FilterSort = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.get("sortBy");

  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSort || "");

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
    if (category) {
      setSearchParams({ category });
      dispatch(getBookAPI({ params: { category } }));
    }
  }, [category, dispatch, searchParams]);

  useEffect(() => {
    if (sortBy) {
      const params = {
        category: searchParams.getAll("category"),
        sortBy,
      };

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: "release_year",
          _order: sortBy,
        },
      };

      setSearchParams(params);
      dispatch(getBookAPI(getBooksParams));
    }
  }, [searchParams, dispatch, setSearchParams, sortBy]);

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
