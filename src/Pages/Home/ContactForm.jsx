// import { useForm } from "react-hook-form";
// import soldierImage from "../../assets/soldierImg.jpg"; 
// import { useContactFormMutation } from "../../redux/features/baseApi";
// import { toast, ToastContainer } from "react-toastify";


// const ContactForm = () => {

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//    const [contactForm, {isLoading}] = useContactFormMutation()

//   const onSubmit = (data) => {
//     console.log("Form Submitted:", data);

//     const formData = {

//       first_name: data?.first_name,
//       last_name: data?.last_name,
//       email: data?.email,
//       phone: data?.phone,
//       message: data?.message

//     }


//    try {
//       const response =  contactForm(formData).unwrap();
//       console.log("response", response);
//       toast.success("Message sent successfully!");
//       reset();
//     } catch (error) {
//       console.error("Submission error", error);
//       toast.error("Failed to send message.");
//     }
//   };



//   return (
//     <section className="bg-gray-200 md:py-0 px-2 md:px-4 md:pb-20 pb-10  flex flex-col items-center justify-center">
//  <ToastContainer />
     
//       <div className="container w-full mx-auto bg-white shadow-md rounded-xl mt-12 p-3 md:p-10">
//         <div className="flex flex-col md:flex-row items-center gap-8">
       
//           <div className="w-full md:w-1/2">
//             <h2 className="md:text-4xl text-2xl font-bold text-gray-900">GET IN TOUCH TODAY</h2>
//             <p className="text-gray-600 mt-2 text-sm md:text-base">
//               Reach out to us with your questions, concerns, or inquiries. We're here to help and look forward to connecting!
//             </p>

//             <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-gray-700  font-semibold">First Name</label>
//                   <input
//                     type="text"
//                     placeholder="First Name"
//                     {...register("first_name", { required: "First Name is required" })}
//                     className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black "
//                   />
//                   {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
//                 </div>
//                 <div>
//                   <label className="block text-gray-700  font-semibold">Last Name</label>
//                   <input
//                     type="text"
//                     placeholder="Last Name"
//                     {...register("last_name", { required: "Last Name is required" })}
//                     className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
//                   />
//                   {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
//                 </div>
//               </div>

     
//               <div>
//                 <label className="block text-gray-700  font-semibold">Email</label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   {...register("email", { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ })}
//                   className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
//                 />
//                 {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
//               </div>


//               <div>
//                 <label className="block text-gray-700  font-semibold">Phone Number</label>
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   {...register("phone", { required: "Phone number is required" })}
//                   className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
//                 />
//                 {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
//               </div>

      
//               <div>
//                 <label className="block text-gray-700  font-semibold">Message</label>
//                 <textarea
//                   placeholder="Your Message"
//                   {...register("message", { required: "Message is required" })}
//                   className="border border-gray-300 p-2 rounded w-full h-24 text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
//                 ></textarea>
//                 {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
//               </div>


//               <button
//                 type="submit"
//                 className="w-full bg-[#152A45] text-white py-3 rounded-md font-semibold uppercase hover:bg-[#1f3c63] transition duration-300"
//               >
//               {isLoading ? <span className="loading loading-bars loading-xl"></span>
//  : "send"}
//               </button>
//             </form>
//           </div>


//           <div className="w-full md:w-1/2">
//             <img src={soldierImage} alt="Soldier" className="rounded-xl shadow-lg w-full" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;


// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { input } from "@/components/ui/input"
// import { label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
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

//     if (!formData.first_name.trim()) {
//       newErrors.first_name = "First name is required"
//     }
//     if (!formData.last_name.trim()) {
//       newErrors.last_name = "Last name is required"
//     }
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email"
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required"
//     }
//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: "",
//       }))
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setIsLoading(true)

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 2000))

//       console.log("Form Submitted:", formData)
//       setIsSubmitted(true)

//       // Reset form after successful submission
//       setTimeout(() => {
//         setFormData({
//           first_name: "",
//           last_name: "",
//           email: "",
//           phone: "",
//           message: "",
//         })
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
//       <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 flex items-center justify-center">
//         <Card className="w-full max-w-md mx-auto text-center p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//           <div className="space-y-4">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
//               <CheckCircle className="w-8 h-8 text-green-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
//             <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
//             <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
//               Response time: 24 hours
//             </Badge>
//           </div>
//         </Card>
//       </section>
//     )
//   }

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
//       <div className="container max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <Badge variant="outline" className="mb-4 bg-white/50 backdrop-blur-sm">
//             Contact Us
//           </Badge>
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch Today</h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Have questions or need assistance? We're here to help and look forward to connecting with you.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Contact Form */}
//           <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
//             <CardContent className="p-8">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <label htmlFor="first_name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       First Name
//                     </label>
//                     <input
//                       id="first_name"
//                       name="first_name"
//                       type="text"
//                       placeholder="Enter your first name"
//                       value={formData.first_name}
//                       onChange={handleInputChange}
//                       className={`transition-all duration-200 ${errors.first_name ? "border-red-300 focus:border-red-500" : "focus:border-blue-500"}`}
//                     />
//                     {errors.first_name && (
//                       <p className="text-red-500 text-xs mt-1 flex items-center gap-1">{errors.first_name}</p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="last_name" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       Last Name
//                     </label>
//                     <input
//                       id="last_name"
//                       name="last_name"
//                       type="text"
//                       placeholder="Enter your last name"
//                       value={formData.last_name}
//                       onChange={handleInputChange}
//                       className={`transition-all duration-200 ${errors.last_name ? "border-red-300 focus:border-red-500" : "focus:border-blue-500"}`}
//                     />
//                     {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>}
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                     <Mail className="w-4 h-4" />
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Enter your email address"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className={`transition-all duration-200 ${errors.email ? "border-red-300 focus:border-red-500" : "focus:border-blue-500"}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                     <Phone className="w-4 h-4" />
//                     Phone Number
//                   </label>
//                   <input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     value={formData.phone}
//                     onChange={handleInputChange}
//                     className={`transition-all duration-200 ${errors.phone ? "border-red-300 focus:border-red-500" : "focus:border-blue-500"}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//                 </div>

//                 <div className="space-y-2">
//                   <label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
//                     <MessageSquare className="w-4 h-4" />
//                     Your Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     placeholder="Tell us how we can help you..."
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     className={`min-h-[120px] transition-all duration-200 resize-none ${errors.message ? "border-red-300 focus:border-red-500" : "focus:border-blue-500"}`}
//                   />
//                   {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none"
//                 >
//                   {isLoading ? (
//                     <>
//                       <Loader2 className="w-4 h-4 mr-2 animate-spin" />
//                       Sending Message...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4 mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Image and Info Section */}
//           <div className="space-y-8">
//             <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
//               <div className="aspect-[4/3] relative">
//                 <img
//                   src="/placeholder.svg?height=400&width=600"
//                   alt="Professional team ready to help"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//               </div>
//             </Card>

//             <Card className="p-6 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
//               <div className="space-y-3">
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full" />
//                   <span className="text-gray-700">Quick response within 24 hours</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full" />
//                   <span className="text-gray-700">Professional and experienced team</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full" />
//                   <span className="text-gray-700">Personalized solutions for your needs</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-2 h-2 bg-blue-600 rounded-full" />
//                   <span className="text-gray-700">100% confidential and secure</span>
//                 </div>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }



import { useState } from "react"
import { CheckCircle, Mail, Phone, User, MessageSquare, Send, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required"
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Please enter a valid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Form Submitted:", formData)
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({ first_name: "", last_name: "", email: "", phone: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
        <div className="bg-white p-8 rounded shadow-lg text-center  w-full">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 rounded-full">
            <CheckCircle className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mt-4">Message Sent!</h3>
          <p className="text-gray-600 mt-2">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Get In Touch Today</h1>
          <p className="text-gray-600">Have questions or need assistance? We're here to help and look forward to connecting with you.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <User className="w-4 h-4" /> First Name
                </label>
                <input
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.first_name ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Enter your first name"
                />
                {errors.first_name && <p className="text-xs text-red-500 mt-1">{errors.first_name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                  <User className="w-4 h-4" /> Last Name
                </label>
                <input
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded ${errors.last_name ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Enter your last name"
                />
                {errors.last_name && <p className="text-xs text-red-500 mt-1">{errors.last_name}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Mail className="w-4 h-4" /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <Phone className="w-4 h-4" /> Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                <MessageSquare className="w-4 h-4" /> Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-2 border rounded min-h-[120px] resize-none ${errors.message ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="Your message..."
              ></textarea>
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-center w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </>
              )}
            </button>
          </form>

<img src="https://png.pngtree.com/png-vector/20240824/ourmid/pngtree-cute-usa-veteran-army-with-transparent-background-png-image_13605303.png" alt="" className="w-2/3"/>
        
        </div>
      </div>
    </div>
  )
}