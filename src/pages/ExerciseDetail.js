import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../utilis/fetchData";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Box } from "@mui/material";
import Details from "../components/Details";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExsercises from "../components/SimilarExsercises";
import fetchVideo from "../utilis/fetchVideo";
import Arrow from "../assets/icons/arrow.jpg";

function ExerciseDetail() {
  const { id } = useParams();
  const [exercise, setExercise] = useState({});
  const [videos, setVideos] = useState([]);
  const [sameTarget, setSameTarget] = useState([]);
  const [sameEquipment, setSameEquipment] = useState([]);

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
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
      );
      setExercise(exercisesData);
    };

    fetchExercisesData();
  }, [id]);

  useEffect(() => {
    const fetchVideoData = async () => {
      const videosData = await fetchVideo(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exercise.name}exercise`
      );
      setVideos(videosData.contents.slice(1));
    };
    if (exercise.name) {
      fetchVideoData();
    }
  }, [exercise]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/"
      );
      setSameTarget(
        exercisesData.filter((item) => item.target === exercise.target)
      );
      setSameEquipment(
        exercisesData.filter((item) => item.equipment === exercise.equipment)
      );
    };

    fetchExercisesData();
  }, [exercise, id]);

  console.log(videos);

  return (
    <Box>
      {exercise && <Details exercise={exercise} />}
      <ExerciseVideo videos={videos} name={exercise.name} />
      <SimilarExsercises
        sameTarget={sameTarget}
        sameEquipment={sameEquipment}
      />
      {showButton && (
        <motion.div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
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
          <img
            src={Arrow}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        </motion.div>
      )}
    </Box>
  );
}

export default ExerciseDetail;
