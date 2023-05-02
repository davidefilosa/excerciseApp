import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow-h">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="left-arrow-h">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const Horizontal = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ height: "50px" }}
    >
      {data.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", "spring", 0.1 * index, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.05 }}
            key={item.id || item}
            itemId={item.id}
            title={item.id || item}
          >
            <Box m="0 40px">
              <ExerciseCard exercise={item} />
            </Box>
          </motion.div>
        );
      })}
    </ScrollMenu>
  );
};

export default Horizontal;
