export default function Step8LivingSituation({ register, errors }) {
  return (
    <div className="space-y-4">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-base pb-1">
            Check The Answer That Most Closely Aligns To Your Living Situation:
          </span>
        </label>
        <select
          {...register("livingSituation", {
            required: "Living Situation is required",
          })}
          className="select select-bordered w-full uppercase"
        >
          <option value="">Select an option</option>
          <option value="Living In A Homeless Shelter">
            Living In A Homeless Shelter
          </option>
          <option value="Not Currently In A Sheltered Environment">
            Not Currently In A Sheltered Environment (e.g., living in a car or
            tent)
          </option>
          <option value="Staying With Another Person">
            Staying With Another Person
          </option>
          <option value="Fleeing Current Residence">
            Fleeing Current Residence
          </option>
          <option value="Housing Will Be Lost In 30 Days">
            Housing Will Be Lost In 30 Days
          </option>
          <option value="Leaving Publicly Funded System Of Care">
            Leaving Publicly Funded System Of Care
          </option>
        </select>
        {errors.livingSituation && (
          <label className="label">
            <span className="label-text-alt text-error">
              {errors.livingSituation.message}
            </span>
          </label>
        )}
      </div>
    </div>
  );
}
