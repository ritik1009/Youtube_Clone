import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {CheckCircle} from '@mui/icons-material'

import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoVideoTitle,demoVideoUrl } from "../utils/constants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    console.log("video",videoId)
  return (
    <Card
      sx={{
        width: { md: "220px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{
            height: '180px',
            width: { sm: "220px", xs: "100%"  },
          }}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle3" fontWeight={"bold"} color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard