import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Videos, Sidebar } from "./";
import { useParams } from "react-router-dom";
import { getVideoAPI, getVideoByType } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const params = useParams();

  useEffect(() => {
    getVideoByType(params.id)
      .then((res) => {
        console.log(res);
        setVideos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  useEffect(() => {
    getVideoAPI()
      .then((res) => {
        console.log(res.data);
        setVideos(res.data);
      })
      .catch((err) => {
        setVideos([]);
        console.log(err.message);
      });
  }, []);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright © 2050 Media
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
