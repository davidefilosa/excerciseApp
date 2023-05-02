import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
import fetchData from "../utilis/fetchData";
import Arrow from "../assets/icons/arrow.jpg";
import { flexbox } from "@mui/system";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 2000 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/"
      );
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, []);

  return (
    <Box sx={{ width: 1 }}>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
      {showButton && (
        <motion.div
          style={{
            backgroundColor: "#fff",
            width: "50px",
            height: "50px",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          variants={textVariant(1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          <a href="#search">
            <img
              src={Arrow}
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </a>
        </motion.div>
      )}
    </Box>
  );
};

export default Home;
