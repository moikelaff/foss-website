"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "How can I apply to UIII?",
    answer:
      "Visit the UIII Admissions Portal for step-by-step guidance on the application process and required documents. The admission portal is only available during the application period. The portal will automatically close once the deadline of the admission ends. Please note that this is the only portal for the application process and we do not accept applications sent via other channels including email, offline submission, etc.",
  },
  {
    question: "What are the admission requirements?",
    answer: "Admission requirements vary by program but generally include academic transcripts, English proficiency test scores, and a statement of purpose, reference reports.",
  },
  {
    question: "Is there an application fee?",
    answer: "Yes, an application fee applies. The amount is Rp 750,000 or USD50.",
  },
  {
    question: "Can we propose an application fee waiver?",
    answer: "We apologize that the proposal for fee waiver is no longer available."
  },
  {
    question: "Are there scholarships available?",
    answer: "UIII offers several scholarships, including those provided by the Indonesian government and international partners.",
  },
  {
    question: "Does UIII accept applicants with non-linear academic backgrounds?",
    answer: "Yes, UIII encourages interdisciplinary learning. Applicants with non-linear academic backgrounds may be admitted if they demonstrate sufficient motivation, academic capability, and relevance to their chosen program."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        setPrevScrollY(window.scrollY); // Store current scroll position before expanding
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        requestAnimationFrame(() => {
        window.scrollTo({ top: prevScrollY, behavior: "instant" });
        });
    }, [openIndex]); // Runs when openIndex changes

  return (
    <div className="font-halyard max-w-full min-h-[100vh] mx-auto py-[100px] px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-[100px]">
      {/* Left: FAQ Content */}
      <div className="md:w-2/3">
        <h2 className="text-[75px] font-regular mb-[50px]">How may we assist you?</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left text-[32px] focus:outline-none flex justify-between items-center transition-colors duration-300 ${
                openIndex === index ? "text-blue-600" : "text-gray-900 hover:text-blue-600"}`}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="font-halyard text-[40px] font-light"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Right: Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/faq-image.png"
          alt="UIII Students"
          className="w-full max-w-sm"
        />
      </div>
    </div>
  );
};

export default FAQSection;
