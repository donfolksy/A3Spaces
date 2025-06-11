import React, { useState } from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  exit: { scale: 0.8, opacity: 0 },
};

const ConsultationModal = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mkgjwwla", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong. Check your internet connection.");
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    isOpen && (
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="relative bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[500px]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Close (X) Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            X
          </button>

          {isSubmitted ? (
            // Confirmation Message
            <div className="text-center">
              <h4 className="text-xl font-bold text-[#A58A63] mb-2">
                Check Your Email
              </h4>
              <p className="text-gray-600 mb-4">
                We've sent an email containing the details of your request.
                <br /> Check your email to get started with us.
              </p>
              <button
                onClick={handleClose}
                className="w-full p-2 bg-[#A58A63] text-white rounded-md hover:bg-[#C5A476] transition"
              >
                Back
              </button>
            </div>
          ) : (
            // Request Form
            <>
              <h2 className="text-xl text-[#A58A63] font-bold mb-4">
                Request a Consultation
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full p-2 mb-4 border border-[#A58A63] rounded focus:outline-none focus:ring-2 focus:ring-[#A58A63]"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full p-2 mb-4 border border-[#A58A63] rounded focus:outline-none focus:ring-2 focus:ring-[#A58A63]"
                />
                <input
                  type="phone"
                  name="pnone"
                  required
                  placeholder="Phone number"
                  className="w-full p-2 mb-4 border border-[#A58A63] rounded focus:outline-none focus:ring-2 focus:ring-[#A58A63]"
                />
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Message"
                  className="w-full p-2 mb-4 border border-[#A58A63] rounded focus:outline-none focus:ring-2 focus:ring-[#A58A63]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full p-3 text-white bg-black rounded-md hover:bg-[#C5A476] transition"
                >
                  Send Request
                </button>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    )
  );
};

export default ConsultationModal;
