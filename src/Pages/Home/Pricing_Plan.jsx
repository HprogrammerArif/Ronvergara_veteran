import React from "react";

const Pricing_Plan = () => {
  const plans = [
    {
      name: "Monthly",
      price: "$6.50",
      features: ["Exempel", "Exempel", "Exempel", "Exempel", "Exempel", "Exempel", "Exempel"],
    },
    {
      name: "Feature",
      price: "$9.50",
      features: ["Exempel", "Exempel", "Exempel", "Exempel", "Exempel", "Exempel", "Exempel"],
    },
  ];

  return (
   <section className="bg-gray-200 p-20">
 <div className="bg-white container p-20  mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Choose Your Plan to Complete <br /> the Veteran Benefits Form
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#0B2559] text-white p-8 rounded-3xl shadow-lg flex flex-col items-center text-center"
          >
            <h3 className="text-lg font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold mt-2">{plan.price}</p>

            {/* Features List */}
            <ul className="mt-4 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
   </section>
  );
};

export default Pricing_Plan;
