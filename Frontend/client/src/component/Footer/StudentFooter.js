import React from "react";
import { motion } from "framer-motion";

function StudentFooter() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 text-center font-roboto text-sm py-4 px-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className="text-sm "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Blueskies Academy © 2023 All Rights Reserved. Powered by SQUAD MIND
      </motion.span>
    </motion.footer>
  );
}

export default StudentFooter;
