import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAdminCurrentPage,
  setPaths,
} from "../Features/AdminNavigationSlice";
import CategoryTable from "./CategoryTable";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/styles/admin-events.css";
export default function AdminCategories() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPaths(["Dashboard", "Categories"]));
    dispatch(setAdminCurrentPage("category"));
  }, []);

  return (
    <>
      <div className="admin-categories">
        <div className="title-create-new">
          <span className="title">Categories</span>
          <Link to="create" className="create-new-button">
            Create New
          </Link>
        </div>
        <div className="search-area">
          <TextField type="outlined" label="search" />

          <button className="search-button">search</button>
        </div>
        <CategoryTable />
      </div>
    </>
  );
}
