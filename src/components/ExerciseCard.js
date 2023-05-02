import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exercise/${exercise.id}/`}
      className="exercise-card"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#fa9191",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": {
              bgcolor: "#FF2524",
              color: "white",
            },
          }}
        >
          {exercise.target}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#fa9191",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            ":hover": {
              bgcolor: "#FF2524",
              color: "white",
            },
          }}
        >
          {exercise.equipment}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: "20px",
          color: "#000",
          fontSize: "18px",
          fontWeight: "700",
          textTransform: "capitalize",
          mt: "10px",
          pb: "10px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
