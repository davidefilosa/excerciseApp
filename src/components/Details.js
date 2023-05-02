import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Details = ({ exercise }) => {
  const { name, target, equipment, bodyPart, gifUrl, id } = exercise;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        padding: "20px",
        alignItems: "center",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h2" sx={{ textTransform: "capitalize" }}>
          {name}
        </Typography>
        <Typography variant="h5">{`The ${name} is one of the best exercises to target ${target} and ${bodyPart}. Exercises help improve physical fitness and enhances mental well-being. Start doing ${name} today!`}</Typography>
        {extraDetail.map((item, index) => {
          return (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  backgroundColor: "#fff2db",
                  borderRadius: "50%",
                  height: "100px",
                  width: "100px",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography variant="h5" sx={{ textTransform: "capitalize" }}>
                {item.name}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Details;
