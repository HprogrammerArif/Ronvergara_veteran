export default function Step3DateOfBirth({ register, errors }) {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-base pb-1">
            Date of Birth (MM/DD/YYYY)
          </span>
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            maxLength="2"
            {...register("DOB_Month[0]", {
              required: "Month is required",
              pattern: {
                value: /^(0[1-9]|1[0-2])$/,
                message: "Invalid month (01-12)",
              },
            })}
            className="input input-bordered w-1/3 py-5"
            placeholder="MM"
          />
          <input
            type="text"
            maxLength="2"
            {...register("DOB_Day[0]", {
              required: "Day is required",
              pattern: {
                value: /^(0[1-9]|[12][0-9]|3[01])$/,
                message: "Invalid day (01-31)",
              },
            })}
            className="input input-bordered w-1/3 py-5"
            placeholder="DD"
          />
          <input
            type="text"
            maxLength="4"
            {...register("DOB_Year[0]", {
              required: "Year is required",
              pattern: {
                value: /^\d{4}$/,
                message: "Invalid year (e.g., 1990)",
              },
            })}
            className="input input-bordered w-1/3 py-5"
            placeholder="YYYY"
          />
        </div>
        {(errors.DOB_Month?.[0] ||
          errors.DOB_Day?.[0] ||
          errors.DOB_Year?.[0]) && (
          <label className="label">
            <span className="label-text-alt text-error">
              Please enter a valid date of birth
            </span>
          </label>
        )}
      </div>
    </div>
  );
}
