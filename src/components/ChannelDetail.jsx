import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos , ChannelCard} from './';
import { fetchFormApi } from "../utils/fetchFormApi";

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videoData, setvideoData] = useState([]);
  const {id} = useParams();
  useEffect(()=>{
    fetchFormApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setchannelDetail(data?.items[0]))

    fetchFormApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) =>
      setvideoData(data?.items)
    );
  },[id])
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(231,0,193,1) 100%)",
            height: "250px",
            width: "100%",
            zIndex: "10",
          }}
        />
        <ChannelCard channel={channelDetail} marginTop={"-93px"} />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{mr:{sm:'100px'}}}/>
          <Videos videos={videoData} />
      </Box>
    </Box>
  );
}

export default ChannelDetail