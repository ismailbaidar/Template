import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { GridDeleteIcon } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setPaths } from "../Features/AdminNavigationSlice";

const CreateCategoryPage = () => {
  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    parentCategory: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPaths(["Dashboard", "Categories", "Create"]), []);
  }, []);

  const handleChange = (e) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(categoryData);
    // Add your logic to handle the form submission
  };

  return (
    <form onSubmit={handleSubmit} className="create-category-admin">
      <TextField
        label="Category Name"
        name="categoryName"
        value={categoryData.categoryName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel id="parentCategoryLabel">Parent Category</InputLabel>
        <Select
          labelId="parentCategoryLabel"
          name="parentCategory"
          value={categoryData.parentCategory}
          onChange={handleChange}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="CategoryX">Category X</MenuItem>
          <MenuItem value="CategoryY">Category Y</MenuItem>
          <MenuItem value="CategoryZ">Category Z</MenuItem>
          {/* Add more parent categories as needed */}
        </Select>
      </FormControl>

      <Button type="submit" className="submit-form-button">
        Submit
      </Button>
    </form>
  );
};

export default CreateCategoryPage;
