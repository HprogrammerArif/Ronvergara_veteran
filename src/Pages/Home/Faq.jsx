import { useState } from "react";

const faqs = [
  {
    question: "What benefits can I qualify for?",
    answer:
      "Veterans can qualify for healthcare, disability compensation, education assistance, housing loans, pension benefits, vocational training, and survivor support programs.",
  },
  {
    question: "What happens if I've been denied before?",
    answer: "If you have been denied before, we can guide you through the appeal process to ensure you get the benefits you deserve.",
  },
  {
    question: "How long does the process take?",
    answer: "The process varies depending on the case, but generally it takes a few weeks to a few months.",
  },
  {
    question: "What is your guest screening process?",
    answer: "Our guest screening process includes background checks and verification to ensure a safe and secure environment.",
  },
  {
    question: "How much are your Co-Hosting fees?",
    answer: "Our Co-Hosting fees vary depending on the services you require. Contact us for more detailed pricing information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and closed state
  };

  return (
   <section className="bg-gray-200 py-20 h-[90vh]">
     <div className="bg-[#0A3161] container mx-auto text-white ">
    <div className=" p-14 text-white">
  <div className=" mx-auto text-center mb-12">
        <h2 className="text-4xl text-start font-bold">Frequently Asked Questions</h2>
        <p className="text-xl text-start mt-4">We have your answers.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-none">
            <div
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center p-3  cursor-pointer transition-all"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {openIndex === index && (
              <div className="p-6 bg-white text-gray-800 rounded-none">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
   </section>
  );
}
