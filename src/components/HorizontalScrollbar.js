import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { Box, Typography, Button } from "@mui/material";
import { ListItem } from "@mui/material";
import Category from "./Category";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((category, index) => {
        return (
          <motion.div
            variants={fadeIn("up", "spring", 0.1 * index, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.05 }}
            key={category.id || category}
            itemId={category}
            title={category.id || category}
          >
            <Box m="0 40px">
              <Category
                category={category}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </Box>
          </motion.div>
        );
      })}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
