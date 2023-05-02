import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import Horizontal from "./Horizontal";

const SimilarExsercises = ({ sameEquipment, sameTarget }) => {
  return (
    <Stack id="exercises">
      <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
        <Typography variant="h4" mb="33px">
          Similar&nbsp;
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            Target Muscle
          </span>
          &nbsp;exercises
        </Typography>
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          aligitems="center"
          direction="row"
          sx={{
            flex: { lg: "row" },
            gap: { lg: "110px", xs: "0" },
          }}
        >
          <Horizontal data={sameTarget} />
        </Stack>
      </Box>
      <Box sx={{ marginTop: { lg: "200px", xs: "20px" }, p: "20px" }}>
        <Typography variant="h4" mb="33px">
          Similar&nbsp;
          <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
            Equipment
          </span>
          &nbsp;exercise
        </Typography>
        <Box
          justifyContent="flex-start"
          flexWrap="wrap"
          aligitems="center"
          direction="row"
          sx={{
            flex: { lg: "row" },
            gap: { lg: "110px", xs: "0" },
          }}
        >
          <Horizontal data={sameEquipment} />
        </Box>
      </Box>
    </Stack>
  );
};

export default SimilarExsercises;
