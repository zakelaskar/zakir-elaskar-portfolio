import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/** `react-router-dom` `Link` with `framer-motion` props (e.g. scroll-in animations on cards). */
export const MotionLink = motion.create(Link);
