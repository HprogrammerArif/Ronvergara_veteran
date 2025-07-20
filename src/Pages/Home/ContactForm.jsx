// import { useState } from "react"
// import { CheckCircle, Mail, Phone, User, MessageSquare, Send, Loader2 } from "lucide-react"

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     phone: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [isLoading, setIsLoading] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.first_name.trim()) newErrors.first_name = "First name is required"
//     if (!formData.last_name.trim()) newErrors.last_name = "Last name is required"
//     if (!formData.email.trim()) newErrors.email = "Email is required"
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Please enter a valid email"
//     if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
//     if (!formData.message.trim()) newErrors.message = "Message is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (!validateForm()) return

//     setIsLoading(true)
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 2000))
//       console.log("Form Submitted:", formData)
//       setIsSubmitted(true)
//       setTimeout(() => {
//         setFormData({ first_name: "", last_name: "", email: "", phone: "", message: "" })
//         setIsSubmitted(false)
//       }, 3000)
//     } catch (error) {
//       console.error("Submission error:", error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
//         <div className="bg-white p-8 rounded shadow-lg text-center  w-full">
//           <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
//             <CheckCircle className="text-green-600 w-8 h-8" />
//           </div>
//           <h3 className="text-2xl font-bold mt-4">Message Sent!</h3>
//           <p className="text-gray-600 mt-2">Thank you for reaching out. We'll get back to you within 24 hours.</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-blue-50 py-12 px-4">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-2">Get In Touch Today</h1>
//           <p className="text-gray-600">Have questions or need assistance? We're here to help and look forward to connecting with you.</p>
//         </div>
//         <div className="grid md:grid-cols-2 gap-8">
//           <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
//                   <User className="w-4 h-4" /> First Name
//                 </label>
//                 <input
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleInputChange}
//                   className={`w-full p-2 border rounded ${errors.first_name ? 'border-red-400' : 'border-gray-300'}`}
//                   placeholder="Enter your first name"
//                 />
//                 {errors.first_name && <p className="text-xs text-red-500 mt-1">{errors.first_name}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
//                   <User className="w-4 h-4" /> Last Name
//                 </label>
//                 <input
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleInputChange}
//                   className={`w-full p-2 border rounded ${errors.last_name ? 'border-red-400' : 'border-gray-300'}`}
//                   placeholder="Enter your last name"
//                 />
//                 {errors.last_name && <p className="text-xs text-red-500 mt-1">{errors.last_name}</p>}
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
//                 <Mail className="w-4 h-4" /> Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
//                 placeholder="Enter your email"
//               />
//               {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
//                 <Phone className="w-4 h-4" /> Phone
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
//                 placeholder="Enter your phone number"
//               />
//               {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
//                 <MessageSquare className="w-4 h-4" /> Message
//               </label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded min-h-[120px] resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
//                 placeholder="Your message..."
//               ></textarea>
//               {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
//             </div>

//             <button
//               type="submit"
//               disabled={isLoading}
//               className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-4 h-4 mr-2" /> Send Message
//                 </>
//               )}
//             </button>
//           </form>

// <img src="https://png.pngtree.com/png-vector/20240824/ourmid/pngtree-cute-usa-veteran-army-with-transparent-background-png-image_13605303.png" alt="" className="w-2/3"/>
        
//         </div>
//       </div>
//     </div>
//   )
// }



import { useForm } from "react-hook-form";
import { CheckCircle, Mail, Phone, User, MessageSquare, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form Submitted:", data);
      setIsSubmitted(true);
      setTimeout(() => {
        reset();
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants for mobile and desktop
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md"
        >
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
            <CheckCircle className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mt-4">Thank You!</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Your message is on its way! We'll reach out within 24 hours.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="md:min-h-[80vh] bg-blue-50 md:py-40 py-20 pt-44 md:pt-0 px-4 flex items-center justify-center"
>
      <div className="container mx-auto">
        <motion.div
          variants={formVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-8"
        >
          <h1 className="text-3xl text-start md:text-4xl font-bold mb-2 text-gray-800">
            get in touch today
          </h1>
          <p className="text-gray-600 text-sm md:text-base text-start md:w-2/4">
            Reach out to us with your questions, concerns, or inquiries. We’re here to help and look forward to connecting!
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.form
            variants={formVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 bg-white p-6 rounded-lg shadow-md w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <User className="w-4 h-4" /> First Name
                </label>
                <input
                  {...register("first_name", { required: "Please enter your first name" })}
                  className={`w-full p-2 text-sm border rounded ${errors.first_name ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Your first name"
                />
                {errors.first_name && <p className="text-xs text-red-500 mt-1">{errors.first_name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <User className="w-4 h-4" /> Last Name
                </label>
                <input
                  {...register("last_name", { required: "Please enter your last name" })}
                  className={`w-full p-2 text-sm border rounded ${errors.last_name ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Your last name"
                />
                {errors.last_name && <p className="text-xs text-red-500 mt-1">{errors.last_name.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Mail className="w-4 h-4" /> Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "We need your email to reach you",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please use a valid email address",
                  },
                })}
                className={`w-full p-2 text-sm border rounded ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Your email address"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Phone className="w-4 h-4" /> Phone
              </label>
              <input
                type="tel"
                {...register("phone", { required: "Please provide a phone number" })}
                className={`w-full p-2 text-sm border rounded ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Your phone number"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <MessageSquare className="w-4 h-4" /> Message
              </label>
              <textarea
                {...register("message", { required: "Let us know how we can help" })}
                className={`w-full p-2 text-sm border rounded min-h-[100px] md:min-h-[120px] resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Tell us how we can assist you..."
              ></textarea>
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center w-full py-2.5 md:py-3 bg-[#0B2A52] text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4 ms-2" /> 
                </>
              )}
            </button>
          </motion.form>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex justify-center items-center"
          >
            <img
              src="https://png.pngtree.com/png-vector/20240824/ourmid/pngtree-cute-usa-veteran-army-with-transparent-background-png-image_13605303.png"
              alt="Veteran illustration"
              className="w-3/4 max-w-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}