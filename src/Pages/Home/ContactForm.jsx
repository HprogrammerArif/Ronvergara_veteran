import { useForm } from "react-hook-form";
import soldierImage from "../../assets/soldierImg.jpg"; 
import { useContactFormMutation } from "../../redux/features/baseApi";
import { toast, ToastContainer } from "react-toastify";


const ContactForm = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   const [contactForm, {isLoading}] = useContactFormMutation()

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);

    const formData = {

      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      phone: data?.phone,
      message: data?.message

    }


   try {
      const response =  contactForm(formData).unwrap();
      console.log("response", response);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Submission error", error);
      toast.error("Failed to send message.");
    }
  };



  return (
    <section className="bg-gray-200 md:py-0 px-2 md:px-4 md:pb-20 pb-10  flex flex-col items-center justify-center">
 <ToastContainer />
     
      <div className="container w-full mx-auto bg-white shadow-md rounded-xl mt-12 p-3 md:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
       
          <div className="w-full md:w-1/2">
            <h2 className="md:text-4xl text-2xl font-bold text-gray-900">GET IN TOUCH TODAY</h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Reach out to us with your questions, concerns, or inquiries. We're here to help and look forward to connecting!
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700  font-semibold">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("first_name", { required: "First Name is required" })}
                    className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black "
                  />
                  {errors.first_name && <p className="text-red-500 text-xs mt-1">{errors.first_name.message}</p>}
                </div>
                <div>
                  <label className="block text-gray-700  font-semibold">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("last_name", { required: "Last Name is required" })}
                    className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
                  />
                  {errors.last_name && <p className="text-red-500 text-xs mt-1">{errors.last_name.message}</p>}
                </div>
              </div>

     
              <div>
                <label className="block text-gray-700  font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ })}
                  className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>


              <div>
                <label className="block text-gray-700  font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", { required: "Phone number is required" })}
                  className="border border-gray-300 p-2 rounded w-full text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

      
              <div>
                <label className="block text-gray-700  font-semibold">Message</label>
                <textarea
                  placeholder="Your Message"
                  {...register("message", { required: "Message is required" })}
                  className="border border-gray-300 p-2 rounded w-full h-24 text-sm dark:bg-white dark:input-bordered dark:border-black dark:text-black"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>


              <button
                type="submit"
                className="w-full bg-[#152A45] text-white py-3 rounded-md font-semibold uppercase hover:bg-[#1f3c63] transition duration-300"
              >
              {isLoading ? <span className="loading loading-bars loading-xl"></span>
 : "send"}
              </button>
            </form>
          </div>


          <div className="w-full md:w-1/2">
            <img src={soldierImage} alt="Soldier" className="rounded-xl shadow-lg w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
