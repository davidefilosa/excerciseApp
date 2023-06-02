import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideo = ({ videos, name }) => {
  if (!videos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
      <Typography variant="h4" mb="33px">
        Watch&nbsp;
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>
        &nbsp;exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        aligitems="center"
        direction="row"
        sx={{ flex: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      >
        {videos?.slice(0, 5).map((video, index) => {
          return (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={video.video.thumbnails[0].url}
                alt={video.video.title}
              />
              <Typography variant="h5" color="#000">
                {video.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {video.video.channelName}
              </Typography>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
