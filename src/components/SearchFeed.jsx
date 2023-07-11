import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFormApi } from "../utils/fetchFormApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFormApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: "white",
        }}
      >
        Search Results For
        <span style={{ color: "#F31503" }}> {searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
