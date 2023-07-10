import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia,Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel,marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:{xs:'356px',md:'230px'},
        margin:'auto',
        marginTop
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
            }
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "167px",
              width: "167px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channel?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>

          {channel?.statistics?.subscriberCount && <Typography>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
