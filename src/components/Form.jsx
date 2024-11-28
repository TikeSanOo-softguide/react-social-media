import { useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import PropTypes from "prop-types";

export default function Form({ add }) {
  const contentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contentRef.current?.value.trim()) {
      // Prevent submission if the input is empty
      alert("Content cannot be empty!");
      return;
    }

    const content = contentRef.current.value.trim();
    add(content, "Alice");
    e.currentTarget.reset(); // Clear the form
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ mb: 4, textAlign: "right" }}>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Content"
          aria-label="Content input"
          fullWidth
          multiline
          required
          sx={{ mb: 1 }}
        />
        <Button variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}

// PropTypes for validation
Form.propTypes = {
  add: PropTypes.func.isRequired,
};
