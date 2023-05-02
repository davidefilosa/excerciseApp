import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/body.jpg";

const Category = ({ category, bodyPart, setBodyPart }) => {
  return (
    <Stack
      onClick={() => {
        setBodyPart(category);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === category
          ? {
              borderTop: "4px solid #ff2624",
              backgroundColor: "#FFF",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              backgroundColor: "#FFF",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "47px",
            }
      }
    >
      <img src={Icon} alt="gym" style={{ width: "75px", height: "75px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#000"
        textTransform="capitalize"
      >
        {category}
      </Typography>
    </Stack>
  );
};

export default Category;
