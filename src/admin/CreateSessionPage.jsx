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

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    startDate: "",
    endDate: "",
    numberOfPlaces: "",
    eventType: "",
    eventAddress: "",
    targetAudience: "",
    category: "",
    sponsor: "",
    supportFiles: [],
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPaths(["Dashboard", "Sessions", "Create"]), []);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      supportFiles: formData.supportFiles.concat(files),
    });
  };

  const handleDeleteFile = (fileIndex) => {
    const updatedFiles = [...formData.supportFiles];
    updatedFiles.splice(fileIndex, 1);
    setFormData({
      ...formData,
      supportFiles: updatedFiles,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="create-session-admin">
      <TextField
        label="Event Name"
        name="eventName"
        value={formData.eventName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Event Description"
        name="eventDescription"
        value={formData.eventDescription}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        value={formData.startDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="End Date"
        name="endDate"
        type="date"
        value={formData.endDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Number of Places"
        name="numberOfPlaces"
        type="number"
        value={formData.numberOfPlaces}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Type"
        name="eventType"
        value={formData.eventType}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="eventAddress"
        value={formData.eventAddress}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="targetAudienceLabel">Target Audience</InputLabel>
        <Select
          labelId="targetAudienceLabel"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
        >
          <MenuItem value="Tech Enthusiasts">Tech Enthusiasts</MenuItem>
          <MenuItem value="Developers">Developers</MenuItem>
          <MenuItem value="Business Professionals">
            Business Professionals
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="sponsorLabel">Sponsor</InputLabel>
        <Select
          labelId="sponsorLabel"
          name="sponsor"
          value={formData.sponsor}
          onChange={handleChange}
        >
          <MenuItem value="Sponsor A">Sponsor A</MenuItem>
          <MenuItem value="Sponsor B">Sponsor B</MenuItem>
          <MenuItem value="Sponsor C">Sponsor C</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="categoryLabel">Category</InputLabel>
        <Select
          labelId="categoryLabel"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <MenuItem value="Category X">Category X</MenuItem>
          <MenuItem value="Category Y">Category Y</MenuItem>
          <MenuItem value="Category Z">Category Z</MenuItem>
        </Select>
      </FormControl>

      <div>
        <input
          accept="image/*, application/pdf"
          id="file-upload"
          type="file"
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <Button
            variant="contained"
            component="span"
            startIcon={<CloudUploadIcon />}
          >
            Add Support
          </Button>
        </label>
        {formData.supportFiles.length > 0 && (
          <div className="file-preview">
            {formData.supportFiles.map((file, index) => (
              <div key={index} className="preview-item">
                {file.type.includes("image/") ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`Preview-${index}`}
                    style={{ maxWidth: "100%", maxHeight: "100px" }}
                  />
                ) : (
                  <span>{file.name}</span>
                )}
                <IconButton
                  color="secondary"
                  className="delete-icon"
                  onClick={() => handleDeleteFile(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </IconButton>
              </div>
            ))}
          </div>
        )}
      </div>

      <Button type="submit" className="submit-form-button">
        Submit
      </Button>
    </form>
  );
};

export default YourFormComponent;
