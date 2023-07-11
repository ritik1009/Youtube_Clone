import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {Videos} from './index';
import { fetchFormApi } from "../utils/fetchFormApi";

const VideoDetail = () => {
  const [videoDetails, setvideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);

  const {id} = useParams();
  useEffect(() => {
    const get_data = () => {
      fetchFormApi(`videos?part=snippet,statistics&id=${id}`)
        .then((data) => setvideoDetails(data.items[0]))
        .catch((err) => console.log(err));

      fetchFormApi(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items));
    };
    get_data();
  }, [id, videoDetails,videos]);

  if (!videos?.snippet) return "loading";
  
  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight={"500"} p={2}>
              {videoDetails?.snippet?.title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {videoDetails?.snippet?.channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap="20px" alignItems={"center"}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent={"center"}>
          <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail