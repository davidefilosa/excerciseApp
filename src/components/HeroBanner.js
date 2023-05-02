import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = () => {
  const { scrollYProgress } = useScroll();
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [yPosCall, setYPosCall] = useState(0);

  scrollYProgress.onChange((x) => {
    setYPos(-1 * x * 15000);
    setYPosCall(x * 1500);

    console.log(yPos);
  });

  return (
    <motion.div
      variants={fadeIn("up", "spring", 1, 5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Box
        sx={{ mt: { lg: "200px", xs: "70px" }, ml: { sm: "50px" } }}
        position="relative"
        p="20px"
      >
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
          Exercise Finder{" "}
        </Typography>
        <Typography
          fontWeightor="700"
          sx={{ fontSize: { lg: "44px", xs: "40px" } }}
          mt={2}
          mb={3}
        >
          Mens Sana <br /> in Corpore Sano
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={2}>
          Check out the most effective exercises
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: "15px",
          }}
          href="#exercises"
          color="error"
        >
          Explore Exercises
        </Button>
        <motion.div style={{ translateY: `${yPosCall}px` }}>
          <Typography
            color="#FF2625"
            fontWeight={600}
            fontSize="220px"
            sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
          >
            Exercises
          </Typography>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="hero-banner-container"
          style={{ translateY: `${yPos}px` }}
        >
          <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default HeroBanner;
