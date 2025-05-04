import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ESignature = () => {
  const [signatureImage, setSignatureImage] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      signature: null,
    },
  });

  // Load from localStorage on mount
  useEffect(() => {
    const storedSignature = localStorage.getItem("signatureImage");
    if (storedSignature) {
      setSignatureImage(storedSignature);
    }
  }, []);

  // Convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  // Handle file input change
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64 = await toBase64(file);
        setSignatureImage(base64);
        localStorage.setItem("signatureImage", base64);
        setValue("signature", file, { shouldValidate: true });
      } catch (err) {
        console.error("Base64 conversion error:", err);
      }
    }
  };

  // Form submission
  const onSubmit = (data) => {
    console.log("Form submitted with e-signature:", data);
    navigate("/submission");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#0A3161] mb-6 text-center">
        SECURE & LEGALLY BINDING E-SIGNATURES <br /> SIGN YOUR VA FORMS WITH EASE
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        {/* Upload Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-5">
            UPLOAD SIGNATURE
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-2 text-center bg-white cursor-pointer">
            <p className="text-gray-500 mb-2">
              {signatureImage ? "Signature Uploaded" : "CLICK TO UPLOAD OR DRAG & DROP"}
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              {...register("signature", {
                required: "Please upload a signature image",
              })}
            />
            {errors.signature && (
              <p className="text-red-500 text-sm mt-1">
                {errors.signature.message}
              </p>
            )}
          </div>
        </div>

        {/* Preview Area */}
        <div className="w-full bg-gray-200 rounded-lg p-6 mb-6 flex items-center justify-center">
          {signatureImage ? (
            <img
              src={signatureImage}
              alt="Signature"
              className="max-w-full max-h-32 object-contain"
            />
          ) : (
            <p className="text-gray-500 text-lg italic">No signature uploaded</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#B31942] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#a01638] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ESignature;
