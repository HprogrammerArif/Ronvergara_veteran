

import React from 'react';
import mentalLogo from "../../assets/mental_health_logo.png";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const MentalHealthSymptoms = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      symptoms: {} // Object to store responses for each question
    }
  });

  const onSubmit = (data) => {
    console.log(data); // Handle form submission (e.g., API call, state update, etc.)
    // You can add your submission logic here
  };

  const symptomQuestions = [
    "Do You Have A Hard Time Motivating Yourself?",
    "Do Daily Tasks Feel Like Chores To You?",
    "Do You Have A Hard Time Getting Out Of Bed In The Morning?",
    "Do You Tend To Procrastinate?",
    "Do You Isolate Yourself And Prefer To Be Alone?",
    "Do You Feel Like Going Out In Public?",
    "Do You Look For Exits And Entrances When Out In Public?",
    "Do You Feel Like You Are Always On Guard And Wary Of Other People?",
    "Do You Have A Hard Time Sleeping / Feeling Like Your Brain Is Always Racing, Never Relaxed?",
    "Do You Have Nightmares?",
    "Do You Feel Like You Are Always Exhausted And In A Foggy State Due To That?",
    "Do You Get Irritable Due To This?",
    "Do You Tend To Snap Easily?",
    "Do You Have Little To No Patience?",
    "Do You Avoid People Due To This?",
    "Do You Ever Use Substances To Cope With Your Mental Health? (Alcohol, Drugs, Smoking)",
    "Do You Ever Feel Like A Burden To Your Family?",
    "Do You Ever Wonder Why You Are Still Here Or Question Your Purpose?",
    "Do You Feel Like You Deal With That You Want To Add?"
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-24 pb-10 mt-10">
      <div className="md:p-6 p-2 rounded-lg w-full max-w-4xl flex flex-col justify-between">
        {/* Header Section (Centered Image and Text) */}
        <div className="bg-[#002B5C] w-full rounded-lg p-6 mb-6 flex flex-col items-center">
          <div className="w-52 h-52 bg-purple-600 rounded-full flex items-center justify-center mb-3">
            <img src={mentalLogo} alt="Mental Health Logo" className="w-32 h-32 object-cover" />
          </div>
          <h1 className="text-white text-2xl font-medium mt-2">Mental Health</h1>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex-grow mt-5">
          {symptomQuestions.map((question, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
            >
              <label className="block text-sm font-medium text-gray-700">
                {question}
                <div className="mt-1 flex items-center space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      {...register(`symptoms.question${index}`, { required: "Please select Yes or No" })}
                      value="yes"
                      className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.symptoms?.[`question${index}`] ? 'border-red-500' : ''}`}
                    />
                    <span className="ml-2">Yes</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      {...register(`symptoms.question${index}`, { required: "Please select Yes or No" })}
                      value="no"
                      className={`w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${errors.symptoms?.[`question${index}`] ? 'border-red-500' : ''}`}
                    />
                    <span className="ml-2">No</span>
                  </div>
                </div>
                {errors.symptoms?.[`question${index}`] && (
                  <span className="text-red-500 text-sm">{errors.symptoms[`question${index}`].message}</span>
                )}
              </label>
            </div>
          ))}
             {/* Buttons Section (At the Bottom) */}
         <button className="mt-4 w-full mx-auto text-center">
          <Link
          to="/mental_health_indicators"
            type="submit"
            className="bg-[#B31942] mx-auto text-white px-6 py-2 rounded-md hover:bg-[#aa2b4d]  focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
          >
            Continue
          </Link>
       
        </button>
        </form>

     
      </div>
    </div>
  );
};

export default MentalHealthSymptoms;