export default function Step2PhoneNumbers({ register, errors }) {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-base">
            International Phone Number (If applicable)
          </span>
        </label>
        <input
          type="tel"
          {...register("International_Phone_Number[0]")}
          className="input input-bordered w-full  py-5"
          placeholder="Enter international phone number"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-base">
            Telephone Number (Include Area Code)
          </span>
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            maxLength="3"
            {...register("TelephoneNumber_FirstThreeNumbers[0]", {
              required: "Phone number is required",
              pattern: { value: /^\d{3}$/, message: "Must be 3 digits" },
            })}
            className="input input-bordered  py-5 w-1/3"
            placeholder="xxx"
          />
          <input
            type="text"
            maxLength="3"
            {...register("TelephoneNumber_SecondThreeNumbers[0]", {
              required: "Phone number is required",
              pattern: { value: /^\d{3}$/, message: "Must be 3 digits" },
            })}
            className="input input-bordered  py-5 w-1/3"
            placeholder="xxx"
          />
          <input
            type="text"
            maxLength="4"
            {...register("TelephoneNumber_LastFourNumbers[0]", {
              required: "Phone number is required",
              pattern: { value: /^\d{4}$/, message: "Must be 4 digits" },
            })}
            className="input input-bordered  py-5 w-1/3"
            placeholder="xxxx"
          />
        </div>
        {(errors.TelephoneNumber_FirstThreeNumbers?.[0] ||
          errors.TelephoneNumber_SecondThreeNumbers?.[0] ||
          errors.TelephoneNumber_LastFourNumbers?.[0]) && (
          <label className="label">
            <span className="label-text-alt text-error">
              Please enter a valid phone number
            </span>
          </label>
        )}
      </div>
    </div>
  );
}
