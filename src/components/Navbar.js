import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/logo.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

function Navbar() {
  return (
    <Stack
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        direction: { xs: "column" },
      }}
      direction="row"
      alignItems="flex-end"
      justifyContent="flex start"
    >
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="Corpore Logo"
            style={{ width: "125px", margin: "20px 60px" }}
          />
        </Link>
      </motion.div>

      <motion.div
        variants={textVariant(1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
      >
        <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#3A1212",
              borderBottom: "3px solid #ff2625",
            }}
          >
            Home
          </Link>
          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#3A1212" }}
          >
            Excercises
          </a>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default Navbar;
