import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center h-16 bg-gray-800 text-white"
    >
      <p className="text-sm">
      © Copyrights 2022 Blueskies Academy All rights reserved
      </p>
    </motion.footer>
  );
}

export default Footer;
