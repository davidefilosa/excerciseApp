import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import fetchData from "../utilis/fetchData";
import { motion } from "framer-motion";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  console.log(currentExercises.length);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/"
      );
      if (bodyPart === "all") {
        setExercises(exercisesData);
      } else {
        exercisesData = exercisesData.filter(
          (exercise) => exercise.bodyPart === bodyPart
        );

        setExercises(exercisesData);
      }
    };

    fetchExercisesData();
  }, [bodyPart]);

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="700" mb="46px">
        See Resaults
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => {
          return (
            <motion.div
              variants={fadeIn("up", "spring", 0.1 * index, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.05 }}
              key={exercise.id}
            >
              <ExerciseCard exercise={exercise} />
            </motion.div>
          );
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            shape="rounded"
            color="standard"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            onChange={paginate}
            page={currentPage}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
