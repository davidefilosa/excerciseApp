import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import fetchData from "../utilis/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList"
      );
      setCategories(exercisesData);
      console.log(categories);
    };

    fetchExercisesData();
  }, []);

  console.log(categories);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/"
      );

      setExercises(
        exercisesData.filter(
          (exercise) =>
            exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search)
        )
      );

      setSearch("");
      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" id="search">
      <motion.div
        variants={textVariant(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: "44px", xs: "30px" },
          }}
          mb="50px"
          textAlign="center"
        >
          Awesome Exercises You <br />
          Should Know
        </Typography>
      </motion.div>
      <motion.div
        variants={textVariant(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: { fontWeight: 700, border: "none", borderRadius: "4px" },
              width: { lg: "800px", xs: "350px" },
              backgroundColor: "#FFF",
              borderRadius: "40px",
            }}
            height="76px"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search exercises"
            type="text"
          />
          <Button
            onClick={handleSearch}
            className="search-btn"
            sx={{
              backgroundColor: "#FF2625",
              color: "#FFF",
              textTransform: "none",
              height: "56px",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              position: "absolute",
            }}
          >
            Search
          </Button>
        </Box>
      </motion.div>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollbar
          data={categories}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
